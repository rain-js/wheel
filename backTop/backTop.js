class BackTop {
	constructor(selector, visibilityHeight) {
		this.$element = $(selector)
		this.visibilityHeight = visibilityHeight
		this.eleOffset = this.$element.offset()

		this.init()
		this.listenToScroll()
	}

	init() {
		this.$element.hide()
		this.$element.wrap('<div class="BackTop-wrapper"></div>')
		this.$element.on('click', function() {
			window.scollTop(0, 0)
		})
	}

	listenToScroll() {
		$(window).on('scroll', () => {
			if (window.scrollY > this.visibilityHeight) {
				this.$element.show()
			} else {
				this.$element.hide()
			}
		})
	}
}