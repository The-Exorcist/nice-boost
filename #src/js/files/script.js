const orderPage = document.querySelector('.order-page');
if (orderPage) {
	const regionsItems = document.querySelectorAll('.order-page__regions-item');
	const races = document.querySelectorAll('.time-select__race-item');
	const boostTypes = document.querySelectorAll('.boost-type__item');
	const speedItems = document.querySelectorAll('.speed__item');
	const additionalContentItems = document.querySelectorAll('.additional-content__item');

	regionsItems.forEach(regionsItem => {
		regionsItem.addEventListener("click", function (e) {

			if (!(e.target.classList.contains("_active"))) {
				for (let i = 0; i < regionsItems.length; i++) {
					const element = regionsItems[i];
					element.classList.remove("_active")
				}
				e.target.classList.add("_active")
			}
		});
	});

	races.forEach(race => {
		race.addEventListener("click", function (e) {

			if (!(e.target.classList.contains("_active"))) {
				for (let i = 0; i < races.length; i++) {
					const element = races[i];
					element.classList.remove("_active")
				}
				e.target.classList.add("_active")
			}
		});
	});
	boostTypes.forEach(boostType => {
		boostType.addEventListener("click", function (e) {

			if (!(e.target.classList.contains("_active"))) {
				for (let i = 0; i < boostTypes.length; i++) {
					const element = boostTypes[i];
					element.classList.remove("_active")
				}
				e.target.classList.add("_active")
			}
		});
	});
	speedItems.forEach(speedItem => {
		speedItem.addEventListener("click", function (e) {
			speed = e.target.closest('.speed__item')
			speed.classList.toggle('_active')
		});
	});
	additionalContentItems.forEach(additionalContentItem => {
		additionalContentItem.addEventListener("click", function (e) {
			this.classList.toggle("_active")
		});
	});
}

const categoriesBlock = document.querySelector('.categories-home-page');
if (categoriesBlock) {
	const categoriesItems = document.querySelectorAll('.categories-home-page__item');
	categoriesItems.forEach(categoriesItem => {
		categoriesItem.addEventListener("click", function (e) {
			e.preventDefault()

			let item = e.target.closest('.categories-home-page__item')
			if (!(e.target.classList.contains("_active"))) {
				for (let i = 0; i < categoriesItems.length; i++) {
					const element = categoriesItems[i];
					element.classList.remove("_active")
				}
				item.classList.add("_active")
			}
		});
	})
}

const actionsHeader = document.querySelector('.actions-header');
if (actionsHeader) {
	const serverItems = document.querySelectorAll('.actions-header__server');
	serverItems.forEach(serverItem => {
		serverItem.addEventListener("click", function (e) {
			let item = e.target.closest('.actions-header__server')
			if (!(e.target.classList.contains("_active"))) {
				for (let i = 0; i < serverItems.length; i++) {
					const element = serverItems[i];
					element.classList.remove("_active")
				}
				item.classList.add("_active")
			}
		});
	})
}