class Dialog {
	constructor(options) {
		this.options = options
		this.init()
	}

	init() {
		let {title, message} = this.options
		let template = `
			<div class="modal-dialog">
				<div class="modal-dialog-wrapper">
					<div class="modal-dialog-header">${title}</div>
					<div class="modal-dialog-content">${message}</div>
					<div class="modal-dialog-footer"></div>
				</div>
			</div>
		`
		let $dialog = $(template)
		
		this.options.buttons.map((buttonOption) => {
			let $button = $(`<button type="button">${buttonOption.text}</button>`)
			$button.on('click', buttonOption.action)
			$dialog.find('.modal-dialog-footer').append($button)
		})

		this.$dialog = $dialog
	}

	open() {
		this.$dialog.appendTo('body')
	}

	close() {
		this.$dialog.detach()
	}
}