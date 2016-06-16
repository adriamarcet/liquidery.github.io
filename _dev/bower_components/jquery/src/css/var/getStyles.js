define( function() {
	return function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

<<<<<<< HEAD
		if ( !view || !view.opener ) {
=======
		if ( !view.opener ) {
>>>>>>> 74ac078b58e4a4d3a88601450b2ba78bfdfc8b37
			view = window;
		}

		return view.getComputedStyle( elem );
	};
} );
