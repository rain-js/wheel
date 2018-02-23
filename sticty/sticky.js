class Sticky {
	constructor(selector, options) {
		this.$element = $(selector)
		this.options = options || {}
		this.topOffset = this.options.topSpacing || 0
		this.className = this.options.className || ''
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
			// console.log(this.topOffset)
			if (window.scrollY + this.topOffset > this.eleOffset.top) {
				this.$element.addClass('sticky')
				this.$element.addClass(this.className)
				this.$element.css({
					top: this.topOffset
				})
			} else {
				this.$element.removeClass('sticky')
				this.$element.removeClass(this.className)
			}
		})
	}
}