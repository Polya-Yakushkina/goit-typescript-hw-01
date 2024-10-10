// Використовуючи утиліту Partial та generics, виправте тип параметра
// функції так, щоб уникнути помилок типізації:
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// }
// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }
// createOrUpdateUser({
//   email: 'user@mail.com',
//   password: 'password123'
// });


// чомусь видає помилку на тип User, змінила на UserOne - помилка зникла.
type UserOne = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserOne>) {
  const existingUser: UserOne = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...existingUser, ...initialValues };
}
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
