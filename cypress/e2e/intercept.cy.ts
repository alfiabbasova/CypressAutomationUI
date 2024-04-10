describe('INTERCEPT', () => {
    it('network request spy', function() {
        cy.fixture('progress.json').as('dataProgress'); //this.data
        cy.fixture('course.json').as('dataCourse');
        cy.fixture('katas.json').as('dataKatas');
        cy.intercept('POST', '*/login').as('login');
        // cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65d426ccdb75721937e5356b', { fixture: "progress.json" }).as('progress');
        cy.intercept(
            {
                method: 'GET',
                url: 'https://server-stage.pasv.us/course/coursesProgress/5fb95c1f360c14003c7ab541',
            },
            (req) => {
                req.continue((res) => {
                    if (res.statusCode === 200) {
                        throw new Error('ERROR 200');
                    }
                });
            }
        )
        .as('course');
        cy.intercept('https://server-stage.pasv.us/course', { 
            fixture: "course.json" })
            .as('course');
        cy.intercept('https://server-stage.pasv.us/progress/codewars/completed/65d426ccdb75721937e5356b', { 
            fixture: "katas.json" 
        })
        .as('katas');

        cy.visit(`${Cypress.env('stage')}/user/login`);
        cy.get('#normal_login_email').type(Cypress.env('email'));
        cy.get('#normal_login_password').type(Cypress.env('password'), { log: false });
        cy.get('button[type="submit"]').click();
        cy.wait('@login').then(wholeResponse => {   //pause until it's done
            console.log(wholeResponse, 'res')
            let id = wholeResponse.response.body.payload.user._id
            cy.location().should(loc => {
                console.log(loc, 'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(wholeResponse.response.statusCode).to.eq(200)
            })
        })
        cy.visit('https://stage.pasv.us/profile/65d426ccdb75721937e5356b/progress')
        cy.wait('@progress').then(el=>{
            //console.log(el,'response')
            cy.wrap(this.dataProgress).should('deep.equal',el.response.body)
        })
        cy.visit('https://stage.pasv.us/course')
        cy.wait('@course').then(el=>{
            cy.wrap(this.dataCourse).should('deep.equal',el.response.body)
             //console.log(el,'response')
        })
        cy.visit('https://stage.pasv.us/profile/65d426ccdb75721937e5356b/katas')
        cy.wait('@katas').then(el=>{
            cy.wrap(this.dataKatas).should('deep.equal',el.response.body)
             //console.log(el,'response')
        })
    })
})


//function() -has this
//() => {} - стрелочная функция не может иметь this

// Описание теста
describe("INTERCEPT", () => {
    // Тест с имитацией сетевого запроса 'Katas'
    it("network request spy Katas", function () {
      // **1.** Загрузить фикстуру (ака. Тестовые данные) с данными прогресса Katas
      cy.fixture("katas.json").as("data");
      // **2.** Имитировать POST-запрос на /login
      cy.intercept("POST", "*/login").as("login");
      //**3.** Имитировать GET-запрос на progress/codewars/completed:id с данными прогресса из фикстуры (ака. Тестовые данные)
      cy.intercept(
        "https://server-stage.pasv.us/progress/codewars/completed/65d4265ddb75721937e5329c",
        { fixture: "katas.json" }
      ).as("codewars");
      // **4.** Посетить страницу входа в систему
      cy.visit(`${Cypress.env("stage")}/user/login`);
      // **5.** Ввести логин и пароль (сделать скрытым ввод пароля)
      cy.get("#normal_login_email").type(Cypress.env("email"));
      cy.get("#normal_login_password").type(Cypress.env("password"), {
        log: false,
      });
      // **6.** Нажать кнопку входа
      cy.get('button[type="submit"]').click();
      // **7.** Дождаться завершения имитированного запроса login и проверить ответ
      cy.wait("@login").then((wholeResponse) => {
        console.log(wholeResponse, "res");
        cy.log("123");
        // **8. Извлечь идентификатор пользователя из тела ответа**
        let id = wholeResponse.response.body.payload.user._id;
        // **9. Проверить, перенаправлено ли на страницу профиля с верным URL**
        cy.location().should((loc) => {
          console.log(loc, "loc");
          expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
          expect(wholeResponse.response.statusCode).to.eq(200);
        });
      });
      // **10. Посетить страницу прогресса курса**
      cy.visit("https://stage.pasv.us/profile/65d4265ddb75721937e5329c/katas");
      // **11. Дождаться завершения имитированного запроса codewars и сравнить ответ с данными из фикстуры**
      cy.wait("@codewars").then((el) => {
        console.log(el, "response");
        cy.wrap(this.data).should("deep.equal", el.response.body);
      });
    });
  });