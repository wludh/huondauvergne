group_id = "469500"
collection_id = "UC9DKBJN"
api_key = "n06ygnguCClUjQgpH2XKsNGG"
format = 'rdf_zotero'
jQuery.get("https://api.zotero.org/groups/469500/collections/UC9DKBJN/items/top?format=coins&v=3&key=n06ygnguCClUjQgpH2XKsNGG", function( data ){
  $(".result").html( data );
  data
  $('head').append(data);
});