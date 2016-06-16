define( [
	"./core",
<<<<<<< HEAD
	"../external/sizzle/dist/sizzle"
=======
	"sizzle"
>>>>>>> 74ac078b58e4a4d3a88601450b2ba78bfdfc8b37
], function( jQuery, Sizzle ) {

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;

} );
