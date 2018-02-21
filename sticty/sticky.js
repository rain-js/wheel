class Sticky {
	constructor(selector, n) {
		this.$element = $(selector)
		this.topOffset = n || 0
		this.eleOffset = this.$element.offset()
		this.addPlaceHolder()
		this.listenToScroll()
	}

	addPlaceHolder() {
		this.$element.wrap('<div class="sticky-wrapper"></div>')
		this.$element.parent().height(this.$element.outerHeight())
	}

	listenToScroll() {
		$(window).on('scroll', () => {
			console.log(this.topOffset)
			if (window.scrollY + this.topOffset > this.eleOffset.top) {
				this.$element.addClass('sticky')
				this.$element.css({
					top: this.topOffset
				})
			} else {
				this.$element.removeClass('sticky')
			}
		})
	}
}