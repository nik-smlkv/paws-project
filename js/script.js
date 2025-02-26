const scrollHeader = () => {
	const header = document.querySelector('.header');
	const headerStyle = header.classList.contains('header-style-white') ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 1)';
	header.style.backgroundColor = window.scrollY >= 20 ? headerStyle : 'transparent';
}
window.addEventListener("scroll", scrollHeader);

const handleChoiseRegister = () => {
	const registerContent = document.querySelector('.register__body');
	registerContent.innerHTML = '';
	const getForm = registerContent.insertAdjacentHTML('beforeend', ` <form action="#" class="sign-up form-style-auth flex-style-column">
						<div class="auth-services flex-style-column">
							<p class="paragraph-margin">Войдите через сервисы:</p>
							<div class="auth-link flex-style-row">
								<a href="#"><img src="./images/svg/services/google.svg" alt="Google"></a>
								<a href="#"><img src="./images/svg/services/apple.svg" alt="Apple"></a>
								<a href="#"><img src="./images/svg/services/yandex.svg" alt="Yandex"></a>
								<a href="#"><img src="./images/svg/services/mailru.svg" alt="Mailru"></a>
							</div>
						</div>
						<p class="linie-style">или</p>
						<div class="signup__inputs flex-style-column">
							<label for="signup__input-phone">
								<p>Телефон</p>
								<input type="phone" placeholder="+375(__)___-__-__"
									class="signup__input signup__input-phone input-signup-style" name="signup__input-phone">
							</label>
							<label for="sign__input-pass" class="input__password">
								<p>Пароль</p>
								<input type="password" class="signup__input input-signup-style" name="sign__input-pass">
								<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.31682 6.16725C2.5372 6.99538 1.95666 7.9599 1.61182 9C2.68848 12.2535 6.03682 14.625 10.0001 14.625C10.8276 14.625 11.6276 14.5215 12.386 14.3287M5.19015 4.671C6.61733 3.82336 8.29021 3.37262 10.0001 3.375C13.9635 3.375 17.311 5.7465 18.3876 8.9985C17.7976 10.7755 16.531 12.3087 14.8101 13.329M5.19015 4.671L2.50015 2.25M5.19015 4.671L8.23182 7.4085M14.8101 13.329L17.5001 15.75M14.8101 13.329L11.7685 10.5915C12.0006 10.3826 12.1848 10.1345 12.3105 9.86149C12.4361 9.58848 12.5008 9.29587 12.5008 9.00037C12.5008 8.70488 12.4361 8.41227 12.3105 8.13926C12.1848 7.86626 12.0006 7.6182 11.7685 7.40925C11.5363 7.2003 11.2607 7.03455 10.9574 6.92147C10.654 6.80839 10.3289 6.75018 10.0006 6.75018C9.67223 6.75018 9.34712 6.80839 9.04378 6.92147C8.74044 7.03455 8.46482 7.2003 8.23265 7.40925M11.7676 10.5908L8.23348 7.41"
										stroke="#3F3D49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</label>
							<label for="input__pasword-repeat" class="input__password">
								<p>Повторите пароль</p>
								<input type="password" class="signup__input input-signup-style input__pasword-repeat" name="input__pasword-repeat">
								<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M3.31682 6.16725C2.5372 6.99538 1.95666 7.9599 1.61182 9C2.68848 12.2535 6.03682 14.625 10.0001 14.625C10.8276 14.625 11.6276 14.5215 12.386 14.3287M5.19015 4.671C6.61733 3.82336 8.29021 3.37262 10.0001 3.375C13.9635 3.375 17.311 5.7465 18.3876 8.9985C17.7976 10.7755 16.531 12.3087 14.8101 13.329M5.19015 4.671L2.50015 2.25M5.19015 4.671L8.23182 7.4085M14.8101 13.329L17.5001 15.75M14.8101 13.329L11.7685 10.5915C12.0006 10.3826 12.1848 10.1345 12.3105 9.86149C12.4361 9.58848 12.5008 9.29587 12.5008 9.00037C12.5008 8.70488 12.4361 8.41227 12.3105 8.13926C12.1848 7.86626 12.0006 7.6182 11.7685 7.40925C11.5363 7.2003 11.2607 7.03455 10.9574 6.92147C10.654 6.80839 10.3289 6.75018 10.0006 6.75018C9.67223 6.75018 9.34712 6.80839 9.04378 6.92147C8.74044 7.03455 8.46482 7.2003 8.23265 7.40925M11.7676 10.5908L8.23348 7.41"
										stroke="#3F3D49" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</label>
							<div class="custom-checkbox">
							<input type="checkbox" class="signup__input radio__input-style" name="condition">
							<label for="condition" class="condition__block custom-radio-paws-style">
								<p class="form-condition-text">С условиями Пользовательского соглашения и Политикой конфиденциальности ознакомлен и согласен</p>
							</label>
							</div>
							<a href="#" class="link-password">Забыли пароль?</a>
						</div>
						<button class="flex-style-row button button-text-style button-hover button-auth button-margin">
							Регистрация
							<svg width="28" height="28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"
								class="pawsicon">
								<use xlink:href="./images/svg/paws.svg#pawsicon"></use>
							</svg>
						</button>
						<div class="register-link flex-style-column">
							<span>Есть профиль на Paws&Pals? </span><a href="" class="link-brown">Войти в аккаунт</a>
						</div>
					</form>`);
	return getForm;
}

const buttonsBlock = document.querySelectorAll('.buttons__block');
buttonsBlock.forEach(button => button.addEventListener("click", handleChoiseRegister))


const headerBurger = document.querySelector('.header__burger');
const headerNavigation = document.querySelector('.header__nav');
headerBurger.addEventListener('click', () => {
	headerNavigation.classList.toggle('active');
	headerBurger.classList.toggle('active-burger');
});



const customSelect = document.querySelector('.custom-select');
const selected = customSelect?.querySelector('.selected');
const optionsContainer = customSelect?.querySelector('.options');

// Функция для открытия/закрытия выпадающего списка
const toggleOptions = () => {
	if (optionsContainer.style.maxHeight) {
		optionsContainer.style.maxHeight = null;
		customSelect.style.height = 60 + 'px';
	} else {
		optionsContainer.style.maxHeight = optionsContainer.scrollHeight + 'px';
		customSelect.style.height = optionsContainer.scrollHeight + 60 + 'px';
	}
};

customSelect?.addEventListener('click', toggleOptions);

customSelect?.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', () => {
		selected.textContent = option.textContent;
		optionsContainer.style.maxHeight = null;
		customSelect.style.height = 60 + 'px';
	});
});

// Закрыть выпадающий список при клике вне его
document.addEventListener('click', (event) => {
	if (!customSelect?.contains(event.target)) {
		optionsContainer.style.maxHeight = null;
		customSelect.style.height = 60 + 'px';
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		loop: true,
		cssMode: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	return swiper
});

function showTab(tabName) {
	const contents = document.querySelectorAll('.tab-content');
	contents.forEach(content => {
		content.style.display = 'none';
	});

	const buttons = document.querySelectorAll('.tab-button');
	buttons.forEach(button => {
		button.classList.remove('active');
	});

	document.getElementById(tabName).style.display = 'flex';
	document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

showTab('shelter');


$(document).ready(function () {
	$('.my-range-slider').rangeslider({
		polyfill: false,
		onSlide: function (position, value) {
			$('.js-range-value').text(value);
		},
	});
});



ymaps.ready(init);
function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.76, 37.64],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 7
	});
}