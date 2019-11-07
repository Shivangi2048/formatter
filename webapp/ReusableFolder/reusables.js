sap.ui.define([],
function(){
	return {
		
	fnOnFormatDate : function(date)	{
		var formattedDate = date.substring(0,2)+"-"+date.substring(2,4) + "-" + date.substring(4);
		return formattedDate;
	},
	 fnReturnStatus: function(status){
	 	if(status=='P'){
	 		return "Paid";
	 	}
	 	else if (status=='N'){
	 		return "Not Paid";
	 	}
	 	else 
	 	return "Due";
	 }
	};

});

