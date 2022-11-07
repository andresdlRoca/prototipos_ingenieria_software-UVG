import { test, expect } from '@playwright/test';
const Chance = require('chance')
const chance = new Chance()
test.describe("Signups",()=>{

  test.beforeEach(async ({ page, request }) => {
    // Go to the starting url before each test.
    await page.goto("http://localhost:3000");
    //await request.put('http://localhost:8080/clean-users-table')
  });
  test.afterAll(async({request})=>{
    //await request.put('http://localhost:8080/clean-users-table')
  })
  test('Usual Signup and redirect', async ({ page }) => {

    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');

    await page.getByRole('link', { name: 'Signup' }).click();
    await expect(page).toHaveURL('http://localhost:3000/signup');

    await page.getByTestId('username').click();

    await page.getByTestId('username').fill(chance.name());

    await page.getByTestId('username').press('Tab');

    await page.getByTestId('email').fill(chance.email());

    await page.getByTestId('email').press('Tab');

    await page.getByTestId('password').fill('password');

    await page.getByTestId('password').press('Tab');

    await page.getByTestId('confirm-password').fill('password');

    await page.getByTestId('Enviar').click();

    await page.waitForURL('http://localhost:3000/')

    //await expect(page).toHaveProperty()

  });
  test('Failed signup: Missing fields', async ({ page }) => {
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByRole('link', { name: 'Signup' }).click();
    await expect(page).toHaveURL('http://localhost:3000/signup');
    await page.getByTestId('email').click();
    await page.getByTestId('email').fill(chance.email());
    await page.getByTestId('email').press('Tab');
    await page.getByTestId('password').fill('password');
    await page.getByTestId('password').press('Tab');
    await page.getByTestId('confirm-password').fill('password');
    await page.getByTestId('Enviar').click();
    await expect(page.locator('#swal2-html-container')).toHaveText('Parece que olvido llenar todos los campos')
    await page.getByRole('button', { name: 'OK' }).click();
  });
  test('Failed signup: User email already used', async ({ page }) => {
    const name = chance.name()
    const email = chance.email()
    const password = 'password'

    /**
     * First signup
     */
     await page.getByRole('link', { name: 'Log in' }).click();
     await expect(page).toHaveURL('http://localhost:3000/login');
     await page.getByRole('link', { name: 'Signup' }).click();
     await expect(page).toHaveURL('http://localhost:3000/signup');
     await page.getByTestId('username').click();
     await page.getByTestId('username').fill(name);
     await page.getByTestId('username').press('Tab');
     await page.getByTestId('email').fill(email);
     await page.getByTestId('email').press('Tab');
     await page.getByTestId('password').fill(password);
     await page.getByTestId('password').press('Tab');
     await page.getByTestId('confirm-password').fill(password);
     await page.getByTestId('Enviar').click();
     await page.waitForURL('http://localhost:3000/')
    /**
     * Second signup
     */
     await page.getByRole('link', { name: 'Log in' }).click();
     await expect(page).toHaveURL('http://localhost:3000/login');
     await page.getByRole('link', { name: 'Signup' }).click();
     await expect(page).toHaveURL('http://localhost:3000/signup');
     await page.getByTestId('username').click();
     await page.getByTestId('username').fill(name);
     await page.getByTestId('username').press('Tab');
     await page.getByTestId('email').fill(email);
     await page.getByTestId('email').press('Tab');
     await page.getByTestId('password').fill(password);
     await page.getByTestId('password').press('Tab');
     await page.getByTestId('confirm-password').fill(password);
     await page.getByTestId('Enviar').click();
     await expect(page.locator('h2#swal2-title')).toHaveText('Usuario ya registrado')

  });

})

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

  test('Succesfull login', async({page})=>{

    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByPlaceholder('name@example.com').click();
    await page.getByPlaceholder('name@example.com').fill(email);
    await page.getByPlaceholder('Contraseña').click();
    await page.getByPlaceholder('Contraseña').fill(password);  
    await page.getByTestId('Entrada').click();
    await page.waitForURL('http://localhost:3000/')

  })


})