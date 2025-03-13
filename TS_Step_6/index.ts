interface IFormData {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
}

const formData: IFormData = {
  email: '',
  title: '',
  text: '',
  checkbox: false,
};

// Sequence of actions:
// 1) Any form on the page is submitted
// 2) All data from the 4 fields on the page are transferred to the properties of the formData object
// 3) The validateFormData function is executed with this object, returning true/false
// 4) If the previous step returns true, the checkFormData function is executed with this object

const formArr = document.querySelectorAll('form');
const emailInput = document.getElementById('email') as HTMLInputElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const textareaInput = document.getElementById('text') as HTMLTextAreaElement;
const checkboxInput = document.getElementById('checkbox') as HTMLInputElement;

const getFormData = (formData: IFormData): IFormData => {
  formData = {
    email: emailInput?.value ?? '',
    title: titleInput?.value ?? '',
    text: textareaInput?.value ?? '',
    checkbox: checkboxInput?.checked ?? false,
  };
  return formData;
};
const cleanFormData = (data: IFormData) => {
  data = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
  };
  emailInput.value = '';
  titleInput.value = '';
  textareaInput.value = '';
  checkboxInput.checked = false;
};
formArr.forEach((elem) => {
  elem.addEventListener('submit', (e) => {
    e.preventDefault();
    validateFormData(getFormData(formData));
  });
});

function validateFormData(data: IFormData): boolean {
  // If every property of the data object is truthy...
  if (data.email && data.title && data.text) {
    checkFormData(data);
    return true;
  } else {
    console.log('Please, complete all fields');
    return false;
  }
}

function checkFormData(data: IFormData): void {
  const { email } = data;
  const emails: string[] = [
    'example@gmail.com',
    'example@ex.com',
    'admin@gmail.com',
  ];

  // If the email matches at least one in the array
  if (emails.indexOf(email) !== -1) {
    console.log('This email already exists');
  } else {
    console.log('Posting data...');
    cleanFormData(data);
  }
}
