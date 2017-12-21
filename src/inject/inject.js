chrome.extension.sendMessage({}, function(response) {

		//
		// Grab pattern from storage, iterate over,
		// then click each collapse node
		//
		const pattern = chrome.storage.sync.get('collapsePattern', result => {
			if (!result.collapsePattern) return;
			const exts = result.collapsePattern.split(', ').map(m => m.trim())

			exts.forEach(ext => {
				// [data-path$="foo"] => endsWith('foo)
				const nodes = document.querySelectorAll(`[data-path$="${ext}"] .js-details-target`)
				const nodesArray = [].slice.call(nodes);

				nodesArray.forEach(node => {
					node.click()
				})
			})
		})

});