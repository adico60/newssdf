/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var newssdf = {}


newssdf.tipSetup = function(
	width,
	backgroundColor,
	borderColor,
	borderWidth,
	radius,
	padding,
	spikeLength,
	spikeGirth,
	shadow,
	shadowBlur,
	shadowOffsetX,
	shadowOffsetY,
	positions,
	fadeSpeed) {

	newssdf.tip = {

		width : width,
		backgroundColor : backgroundColor,
		borderColor : borderColor,
		borderWidth : borderWidth,
		radius : radius,
		padding : padding,
		spikeLength : spikeLength,
		spikeGirth : spikeGirth,
		shadow: shadow,
		shadowBlur: shadowBlur,
		shadowOffsetX: shadowOffsetX,
		shadowOffsetY: shadowOffsetY,
		positions: positions,
		fadeSpeed : fadeSpeed
	}

}

newssdf.addToolTipSelectorClass = function( element, className ) {
    jQuery( element ).addClass( className );
}

newssdf.removeToolTipSelectorClass = function( element, className ) {
    jQuery( element ).removeClass( className );
}

newssdf.processToolTip = function( toolTipID ) {

	try {

		jQuery( '#idMenusdf' + toolTipID ).bt({

			    shadow: newssdf.tip.shadow,
			    shadowBlur: newssdf.tip.shadowBlur,
			    shadowOffsetX: newssdf.tip.shadowOffsetX,
			    shadowOffsetY: newssdf.tip.shadowOffsetY,
				positions: newssdf.tip.positions,
				cssClass: 'newssdf-tip newssdf-tip-id-' + toolTipID ,
				trigger : 'none',
				contentSelector : 'jQuery( "#toolTipIdMenusdf' + toolTipID + '").html()',
				padding: newssdf.tip.padding,
				width: newssdf.tip.width,
				spikeLength: newssdf.tip.spikeLength,
				spikeGirth: newssdf.tip.spikeGirth,
				cornerRadius: newssdf.tip.radius,
				fill: newssdf.tip.backgroundColor,
				strokeWidth: newssdf.tip.borderWidth,
				strokeStyle: newssdf.tip.borderColor,
				showTip: function(box){
					jQuery(box).fadeIn(newssdf.tip.fadeSpeed);
				},
				hideTip: function(box, callback){
					callback();
				},
				shrinkToFit: true,
				hoverIntentOpts: {
					interval: 0,
					timeout: 0
				}

		});

		jQuery( '#idMenusdf' + toolTipID ).mouseover( function( event ) {

			event.preventDefault();
			var currentSelectStarter = this;
			newssdf.addToolTipSelectorClass( currentSelectStarter, 'newssdf-tip-selector' );


			jQuery( '#idMenusdf' + toolTipID ).btOn();

			jQuery( '.newssdf-tip-id-' + toolTipID ).bind( 'mouseleave', function( event ) {

				event.preventDefault();
				jQuery( '#idMenusdf' + toolTipID ).btOff();
				newssdf.removeToolTipSelectorClass( currentSelectStarter, 'newssdf-tip-selector' );

			});

			jQuery( '#idMenusdf' + toolTipID ).mouseout( function( event ) {

				event.preventDefault();

				var checkTo = 'not_defined';
				if ( typeof event.toElement !== "undefined" ) {
				    checkTo = event.toElement.tagName ;
				}  else if ( typeof event.relatedTarget !== "undefined" ) {
				    checkTo = event.relatedTarget.localName;
				}

				try {
				    if ( checkTo !== 'canvas' && checkTo !== 'CANVAS' &&  checkTo !== 'shape' ) {

					jQuery( '#idMenusdf' + toolTipID ).btOff();
					newssdf.removeToolTipSelectorClass( currentSelectStarter, 'newssdf-tip-selector' );

				    }
				} catch(e) {}

			} );


		} );

	} catch( e ) {}
}