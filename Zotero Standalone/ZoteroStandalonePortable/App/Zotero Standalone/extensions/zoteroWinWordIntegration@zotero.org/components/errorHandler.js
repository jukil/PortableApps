/*
    ***** BEGIN LICENSE BLOCK *****
    
    Copyright © 2013 Center for History and New Media
                     George Mason University, Fairfax, Virginia, USA
                     http://zotero.org
    
    This file is part of Zotero.
    
    Zotero is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    Zotero is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
    
    ***** END LICENSE BLOCK *****
*/

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function Service() {}
Service.prototype = {
    classID: Components.ID('{f123467c-0e8f-471a-89cb-c5c71f157f80}'),
    QueryInterface: XPCOMUtils.generateQI([Components.interfaces.nsISupports,
			Components.interfaces.zoteroWinWordIntegrationErrorHandler]),
    throwError: function(error) {
        throw error;
    }
}

var NSGetFactory = XPCOMUtils.generateNSGetFactory([Service]);