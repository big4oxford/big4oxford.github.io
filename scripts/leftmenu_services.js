// JavaScript Document

(function() {
		
			
			$('#toggle1').bind('click', function() {
				$('#sub1').toggle();

				if ($('#toggle1').html() == "[+]")
					$('#toggle1').html('[-]');
				else
					$('#toggle1').html('[+]');

				return false;
			});
			$('#toggle2').bind('click', function() {
				$('#sub2').toggle();

				if ($('#toggle2').html() == "[+]")
					$('#toggle2').html('[-]');
				else
					$('#toggle2').html('[+]');

				return false;
			});
			$('#toggle3').bind('click', function() {
				$('#sub3').toggle();

				if ($('#toggle3').html() == "[+]")
					$('#toggle3').html('[-]');
				else
					$('#toggle3').html('[+]');

				return false;
			});
			$('#toggle4').bind('click', function() {
				$('#sub4').toggle();

				if ($('#toggle4').html() == "[+]")
					$('#toggle4').html('[-]');
				else
					$('#toggle4').html('[+]');

				return false;
			});
		})();