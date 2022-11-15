import { test, expect } from '@playwright/test';
const Chance = require('chance')
const chance = new Chance()

test.describe('Log in', ()=>{
  const username = chance.name()
  const email = chance.email()
  const password = 'password'
  
  test.beforeAll(async({request})=>{
    const response = await request.post('http://localhost:8080/register', {data: {username, email, password}})
  })
  
  test.afterAll(async({request})=>{
    await request.put('http://localhost:8080/clean-users-table')
  })

  test('Succesfull login', async({page, browserName})=>{

    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.getByPlaceholder('Contraseña').click();
    await page.getByPlaceholder('Contraseña').fill(password);  
    await page.getByTestId('Entrada').click();

  })




  test('Missing fields', async ({ page }) => {

    await page.goto('http://localhost:3000/');

    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');

    await page.getByTestId('Entrada').click();

    await expect(page.locator('#swal2-html-container')).toHaveText('Parece que olvido llenar todos los campos')
    
  });

  test('wrong password', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.getByPlaceholder('Contraseña').fill(password+'1');
    await page.getByTestId('Entrada').click();
    await expect(page.locator('#swal2-html-container')).toHaveText('Usuario o Contraseña Incorrecta')


  });
  test('wrong email', async ({ page }) => {

    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByPlaceholder('name@example.com').fill(email+'1');
    await page.getByPlaceholder('Contraseña').fill(password);
    await page.getByTestId('Entrada').click();
    await expect(page.locator('#swal2-html-container')).toHaveText('Usuario no encontrado')


  });
})