group_id = "469500"
collection_id = "UC9DKBJN"
api_key = "n06ygnguCClUjQgpH2XKsNGG"

jQuery.get("https://api.zotero.org/groups/469500/collections/UC9DKBJN/items/top?format=coins&v=1&key=n06ygnguCClUjQgpH2XKsNGG", function( data ){
  $(".result").html( data );
  $(document.body).append(data);
});