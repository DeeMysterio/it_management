// Copyright (c) 2019, IT-Geräte und IT-Lösungen wie Server, Rechner, Netzwerke und E-Mailserver sowie auch Backups, and contributors
// For license information, please see license.txt

frappe.ui.form.on('Socket', {
	refresh: function(frm) {

	},
	onload: function(frm) {
		frm.set_query("endpoint_socket", function() {  
			if (frm.doc.endpoint_room) {   
				return {
					'filters': {
						"location_room" : frm.doc.endpoint_room, 
					}
				};
			}
		});
	}
});
