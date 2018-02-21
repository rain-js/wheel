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
		var that = this

		$(window).on('scroll', function() {
			console.log(that.topOffset)
			if (window.scrollY + that.topOffset > that.eleOffset.top) {
				that.$element.addClass('sticky')
				that.$element.css({
					top: that.topOffset
				})
			} else {
				that.$element.removeClass('sticky')
			}
		})
	}
}