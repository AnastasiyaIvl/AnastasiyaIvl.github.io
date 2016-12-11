	$(window).load(function() {

	  $('#gallery img').each(function() {

	    createCanvas(this);
	  });

	  function createCanvas(image) {

	    var canvas = document.createElement('canvas');
	    if (canvas.getContext) {
	      var ctx = canvas.getContext("2d");

	      // указать размер холста
	      canvas.width = image.width;
	      canvas.height = image.height;

	      // Как только мы получим ссылку на объект исходного изображения, мы можем использовать DrawImage(ссылка, х, у), чтобы сделать ее Canvas. 
		  // х, у являются координатами на целевом холсте, куда изображение должно быть помещено.
	      ctx.drawImage(image, 0, 0);

	      // Принимаем данные изображения и храним их в массиве ImageData. Вы можете узнать данные Канвас с помощью метода getImageData (). Данные изображения включают в себя цвет пикселя (в десятичной системе, RGB значения) и прозрачности (альфа-значение). Каждый цветовой компонент представляет целое число от 0 до 255. imageData.data содержит высота y ширина х 4 байта данных, с индексом в диапазоне от 0 до (высота y ширина х 4) -1.
	      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
	          pixelData = imageData.data;

	      // Цикл по всем пикселям в массиве ImageData, RGB знаяения цвета.
	      for (var y = 0; y < canvas.height; y++) {
	        for (var x = 0; x < canvas.width; x++) {

	          // Вы можете получить доступ к цвету значения (х, у) пикселя следующим образом:
	          var i = (y * 4 * canvas.width) + (x * 4);

	          // Получить RGB значения.
	          var red = pixelData[i];
	          var green = pixelData[i + 1];
	          var blue = pixelData[i + 2];

	          //  Преобразовать в оттенки серого. Одна из формул преобразования (например, вы могли бы попробовать простой средней (красный + зеленый + синий) / 3)  
	          var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

	          pixelData[i] = grayScale;
	          pixelData[i + 1] = grayScale;
	          pixelData[i + 2] = grayScale;
	        }
	      }

	      // Ввод изменений ImageData обратно на холст.
	      ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

	      // Установка полотна в DOM, прежде чем на картинку:
	      image.parentNode.insertBefore(canvas, image);
	    }
	  }
	});