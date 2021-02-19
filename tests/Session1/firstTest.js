import { Selector } from 'testcafe';

fixture `FirsTest`

test
.page `https://github.com/login?return_to=%2Fjoin%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home`
('Crear repositorio en GitHub', async t => {

    const inputUser = Selector('#login_field');
    const inputPassword = Selector('#password');
    const btnSingIn = Selector('input.btn-primary');
    const btnNewRepository = Selector('a.btn');
    const inputNameRepository = Selector('#repository_name');
    const inputReadMeFile = Selector('#repository_auto_init');
    const btnCreateRepository = Selector('#new_repository > div.js-with-permission-fields > button');
    const ConfirmRepository =Selector('#readme > div.Box-body.px-5.pb-5 > article > h1');
    var NameRepository = "PruebaDos";
  
   

    
    
    await t

    .typeText(inputUser,"jcabdim12@hotmail.com")
    .typeText(inputPassword,'Pollofrito123!')
    .click(btnSingIn)
    .click(btnNewRepository)
    .typeText(inputNameRepository,NameRepository)
    .click(inputReadMeFile)
    .wait(3000)
    .click(btnCreateRepository)
    .wait(5000)
    .expect(ConfirmRepository.innerText).contains(NameRepository)
});
