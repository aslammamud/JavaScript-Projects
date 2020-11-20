
			function newFunction() {
            document.getElementById("newForm").reset();
         }
			var bdt, gbp, usd, eur, cad, aud;
			function init()
			{
				bdt = document.getElementById("BDT");
				gbp = document.getElementById("GBP");
				usd = document.getElementById("USD");
				eur = document.getElementById("EUR");
				cad = document.getElementById("CAD");
				aud = document.getElementById("AUD");
			}

			function bdtfunc()
			{
				gbp.value = (parseFloat(bdt.value) * 0.0095).toFixed(2);
				usd.value = (parseFloat(bdt.value) * 0.012).toFixed(2);
				eur.value = (parseFloat(bdt.value) * 0.011).toFixed(2);
				cad.value = (parseFloat(bdt.value) * 0.016).toFixed(2);
				aud.value = (parseFloat(bdt.value) * 0.017).toFixed(2);
			}

			function gbpfunc()
			{
				bdt.value = (parseFloat(gbp.value) * 105.12).toFixed(2);
				usd.value = (parseFloat(gbp.value) * 0.49246).toFixed(2);
				eur.value = (parseFloat(gbp.value) * 0.69714).toFixed(2);
				cad.value = (parseFloat(gbp.value) * 0.50221).toFixed(2);
				aud.value = (parseFloat(gbp.value) * 0.43497).toFixed(2);
			}

			function eurfunc()
			{
				bdt.value = (parseFloat(eur.value) * 95.20).toFixed(2);
				gbp.value = (parseFloat(eur.value) * 1.43448).toFixed(2);
				usd.value = (parseFloat(eur.value) * 0.70641).toFixed(2);
				cad.value = (parseFloat(eur.value) * 0.72037).toFixed(2);
				aud.value = (parseFloat(eur.value) * 0.62382).toFixed(2);
			}

			function cadfunc()
			{
				bdt.value = (parseFloat(cad.value) * 62.10).toFixed(2);
				gbp.value = (parseFloat(cad.value) * 1.99169).toFixed(2);
				usd.value = (parseFloat(cad.value) * 0.98054).toFixed(2);
				eur.value = (parseFloat(cad.value) * 1.38814).toFixed(2);
				aud.value = (parseFloat(cad.value) * 0.86613).toFixed(2);
			}

			function audfunc()
			{
				bdt.value = (parseFloat(aud.value) * 58.30).toFixed(2);
				gbp.value = (parseFloat(aud.value) * 2.29964).toFixed(2);
				usd.value = (parseFloat(aud.value) * 1.13262).toFixed(2);
				eur.value = (parseFloat(aud.value) * 1.60329).toFixed(2);
				cad.value = (parseFloat(aud.value) * 0.88297).toFixed(2);
			}

			function usdfunc()
			{
				bdt.value = (parseFloat(usd.value) * 84.862).toFixed(2);
				gbp.value = (parseFloat(usd.value) * 2.03032).toFixed(2);
				eur.value = (parseFloat(usd.value) * 1.41544).toFixed(2);
				cad.value = (parseFloat(usd.value) * 1.01941).toFixed(2);
				aud.value = (parseFloat(usd.value) * 0.88297).toFixed(2);
			}
			init();

			var arr = ["A body makes his own luck, be it good or bad", "Change yourself and fortune will change.", "Good things come when you least expect them.", "Great actions are not always true sons of great and mighty resolutions.", "Happy is the bride that the sun shines on.", "It is possible to have too much of a good thing.", "Lightning never strikes the same place twice.", "May the wind be always at your back.", "Sum up at night what thou hast done by day.", "The new boat will find the old stones.", "Venture a small fish to catch a great one."];
			document.getElementById("demo").innerHTML = arr[Math.floor(Math.random() * arr.length)];
