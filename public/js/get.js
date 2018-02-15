var get = {
	
	// Get single element by querySelector method
	el: function(el) { return document.querySelector(el) },
	
	// Get single element with getElementById method
	elById: function(el) { return document.getElementById(el) },

	// Get nodelist by querySelectorAll
	all: function(el) { return document.querySelectorAll(el) },
	
	// Get array
	allArray: function(el) { return [].slice.call(this.all(el)) },

	// Get array index of an element
	index: function(el){
		var children = [].slice.call(el.parentElement.children),
				elIndex;

		// find the element by iterate each array item
		children.filter(function(child, index) {

			// if match, assign index value to variable 
			if(child === el){
				elIndex = index;
			}

		});

		return elIndex;
	},
	
	// Get siblings
	siblings: function(el){

		// first child
		var child = el.parentElement.children[0],
				siblings = [];

		// if this element has at least 1 sibling, it will loop through the next elements
		if(child.nextElementSibling) {
			for(; child; child = child.nextElementSibling){

				// if the next sibling is not the parameter then push them to array
				if(child !== el){
					siblings.push(child);
				}
			}
		} else { // throw error if there's no siblings
			throw new Error("this element doesn't have any siblings");
		}

		return siblings;
	},
	
	// Get parent of an element by using class or ID as parent reference
	parentOf: function(el, parentSelector){

		var parent;	

		if(parentSelector){
			var parentType = parentSelector.charAt(0);
		} else {
			throw new Error("parent selector is not defined");
		}

		var parentWithoutSymbol = parentSelector.substr(1);

		for(; el && el !== document; el = el.parentNode){
			// the first time around, it is a parentNode of the base elem
			// the elem reference is constantly changing over loop

			// if parent is a class
			if(parentType === "."){
				if(el.classList.contains(parentWithoutSymbol)) {
					parent = el;
				}
			}

			// if parent is an ID
			if(parentType === "#"){
				if(el.id === parentWithoutSymbol){
					parent = el;
				}
			}
			
		}

		return parent;
	},

	// Get children of an element
	childrenOf: function(el, childrenSelector){
		var children = el.querySelectorAll(childrenSelector);
		// if children > 1 return array, if not return single HTML element
		(children.length > 1) ? children = [].slice.call(children) : children = children[0];
		
		return children;
	},

	// get foreach function
	forEach: function(subject, fn) {
		var length = subject.length;
		for (var i = 0; i < length; i++) {
			fn(subject[i], i, subject);
		}
	}

}