var gallery = (function() {

	var classNameOfPhoto,
		  listsOfAllPhoto,
		  classNameOfPhotoCounter;

	function setAllPageturner() {

		var imgs = document.getElementsByClassName(classNameOfPhoto),
			counters = document.getElementsByClassName(classNameOfPhotoCounter),
			numberOfImgs = imgs.length,
			albums = [numberOfImgs],
			i;

		for (i = 0; i < numberOfImgs; i += 1) {
			albums[i] = setPageturner(imgs[i], listsOfAllPhoto[i], counters[i]);
		}
	};

	function setPageturner(img, listOfSrc, counter) {

		var index = 0;		// index of current src

		setIndexOfCurrentSrc();

		img.onclick = function(event) {
			event = event || window.event;
			sideOfClick(event) == 'right' ? nextSrc() : prevSrc();
			setIndexOfCurrentSrc();
		}

		function sideOfClick(event, indexOfImg) {
			var rect = img.getBoundingClientRect();
			var imgWidth = rect.right - rect.left;
			var side = event.clientX > imgWidth / 2 + rect.left ? 'right' : 'left';
			return side;
		}

		function nextSrc() {
			index = index === listOfSrc.length - 1 ? 0 : index + 1;
			img.src = listOfSrc[index];
		}

		function prevSrc() {
			index = index === 0 ? listOfSrc.length - 1 : index -1;
			img.src = listOfSrc[index];
		}

		function setIndexOfCurrentSrc() {
			var str = '', len = listOfSrc.length, i;

			for (i = 0; i < len; i += 1) {
				if (i === index)  {
					str += '<big>&#9679</big> ';
				} else {
					str += '&#8226 ';
				}
			}

			counter.innerHTML = str;
		}
	}

	return {
		init: function(options) {
			classNameOfPhoto = options.classNameOfPhoto,
			listsOfAllPhoto = options.listsOfAllPhoto;
			classNameOfPhotoCounter = options.classNameOfPhotoCounter;

			setAllPageturner();
		}
	}
})();
