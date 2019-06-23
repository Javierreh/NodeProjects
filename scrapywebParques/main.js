// const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const URL = 'https://www.madrid.es/portales/munimadrid/es/Inicio/Buscador?vgnextoid=d4cade31bd2ac410VgnVCM100000171f5a0aRCRD&vgnextchannel=d4cade31bd2ac410VgnVCM100000171f5a0aRCRD&action=es.iam.portlet.buscador.SearchAction&advanced=true&type=EntidadesYOrganismos&q=parques&hq=more%3Apagemap%3Ametatags-wt.cg_s%3AEntidadesYOrganismos';


(async function() {

	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();


	await page.goto(URL);
	await page.waitForSelector('.search_result_container');
	// await page.screenshot({ path: 'example.png' });

	let busqueda = await page.$$('li.result-container');

	let hrefParques = [];

	for (let i = 0; i < busqueda.length; i++) {
		let href = await busqueda[i].$eval('a', a => a.href.trim());
		hrefParques.push(href);
	}

	for (let i = 0; i < hrefParques.length; i++) {
		let parque = {}
		await page.goto(hrefParques[i]);
		await page.waitForSelector('.container');
		parque.title = await page.$eval('h3.summary-title', h3 => h3.innerText.trim());
		parque.descripcion = await page.$eval('.tiny-text', div => div.innerText.trim());
		parque.imagen = await page.$eval('.mainContent img:first-child', img => img.src.trim());
		parque.direccion = await page.$eval('dl.dl-horz.adr dd', dd => dd.innerText.trim());
		
		if ((await page.$eval('dl.adr dt:last-of-type', dt => dt.innerText.trim())).toLowerCase().startsWith('barrio')) {
			parque.barrio = await page.$eval('dl.adr dd:last-of-type', dd => dd.innerText.trim().toLowerCase());
		} else {
			parque.barrio = 'N/A';
		}

		parque.comoLlegar = await page.$eval('#comoLlegar .tiny-text', div => div.innerText.trim());

		let servicios = await page.$$('#servicios .tiny-text ul li');
        parque.servicios = [];
        for (let i = 0; i < servicios.length; i++) {
            let serv = await page.evaluate(elem => elem.textContent.trim(), servicios[i])
            parque.servicios.push(serv)
        }

		console.log(parque);
		await page.waitFor(200);
	}

	// console.log(busqueda.length);

	await browser.close();

})();