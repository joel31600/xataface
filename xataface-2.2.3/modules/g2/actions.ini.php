;<?php exit;
[logout > logout]
	url="{$site_href}?-action=logout"
	condition="df_is_logged_in()"
	label="Log Out"
	description="Log out of the system"
	category=personal_tools
	order=100
	
[login > login]
	url="{$site_href}?-action=login"
	condition="!df_is_logged_in() and @$this->_conf['_auth']"
	label="Log In"
	description="Log into the system"
	category=top_right_menu_bar
	
[show_all > show_all]
	category=""
	
[copy_replace_ui > copy_replace_ui]
	category=""
	
[update_set > update_set]
	category=""

[delete > delete]
	category=""
	
[delete_found > delete_found]
	category=""
	
[export_list]
	category=result_list_actions
	label="Export"
	description="Export this result set as ..."
	url="#"
	class="export-list"
	subcategory=list_export_actions
	
[delete_results > delete_selected]
	category=result_list_actions
	label="Delete"
	description="Delete selected records"
	class="delete-results right-btn selected-action"
	order="-98"
	url="{$this->url('-action=delete_selected')}"
	
[copy_results > copy_replace_ui]
	category=result_list_actions
	label="Copy"
	description="Copy selected records"
	class="copy-results left-btn selected-action"
	order="-100"
	
[update_results > update_set]
	category=result_list_actions
	label="Update"
	description="Update selected records"
	class="update-results middle-btn selected-action"
	order="-99"
	
[export_xml > export_xml]
	category=list_export_actions
	class="selected-or-full-set-action"
	atts:data-xf-use-full-set-if-empty="You haven't selected any rows to export.  Would you like to export the full found set?"
	
[export_csv > export_csv]
	category=list_export_actions
	class="selected-or-full-set-action"
	atts:data-xf-use-full-set-if-empty="You haven't selected any rows to export.  Would you like to export the full found set?"
		
[rss > rss]
	category=list_export_actions
	class="full-set-action"
	atts:data-xf-full-set-warning="This action will export the full found set as an RSS feed.  Do you wish to continue?"
	

[export_record]
	category=record_actions
	label="Export"
	description="Export this record as ..."
	url="#"
	class="export-record"
	subcategory=record_export_actions

	
[view_xml > view_xml]
	category=record_export_actions
	
[record_rss > record_rss]
	category=record_export_actions
	
[edit_record > edit]
	category=record_actions
	order=-100
	description="Edit this record"
	condition="$query['-action'] != 'edit'"
	
[cancel_edit_record > view]
	label="Cancel"
	description="Cancel Edit"
	condition="$query['-action'] == 'edit'"
	category=record_actions
	order=-100

	
[delete_record > delete]
	category=record_actions
	order=-99

	
[record_back > list]
	category=record_actions
	order=-1500
	label=""
	class="record-back"
	description="Return to list view"

	
	
[view > view]
	label="Details"
	
[edit > edit]
	category=""
	
[add_new_related_record_g2]
	label="New {$relationship->getSingularLabel()}"
	description="Create a new {$relationship->getSingularLabel()} and add it to the {$record->getTitle()}"
	label_condition="$relationship"
	description_condition="$relationship"
	condition="$relationship and $relationship->supportsAddNew()"
	permission="add new related record"
	category=related_list_actions
	url="{$this->url('-action=new_related_record')}"
	order=-1000
	
	
[add_existing_related_record_g2]
	label="Add Existing"
	description="Add an existing {$relationship->getSingularLabel()} it to the {$record->getTitle()}"
	label_condition="$relationship"
	description_condition="$relationship"
	condition="$relationship and $relationship->supportsAddExisting()"
	permission="add existing related record"
	category=related_list_actions
	url="{$this->url('-action=existing_related_record')}"
	order=-999
	

	
[export_related]
	subcategory=related_export_actions
	category=related_list_actions
	label=Export
	
[related_rss > related_rss]
	category=related_export_actions
	
[related_xml > related_xml]
	category=related_export_actions
	
[export_csv_related > export_csv_related]
	category=related_export_actions
	
[search_related]
	category=related_list_actions
	url="#"
	order=-50
	label="Filter"
	description="Filter {$relationship->getLabel()} using a keyword search."
	description_condition="$relationship"
	class="search-relationship-action"
	condition="$relationship"
	onclick="Dataface.RelatedList.showSearch('{$relationship->getName()}', document.getElementById('related_find_wrapper')); return false;"
	onclick_condition="$relationship"
	
[copy_related]
	category=related_list_actions
	url="{$this->url('-action=copy_replace')}&-from={$query['-action']}&--copy=1"
	order="-100"
	label="Copy"
	description="Copy selected {$relationship->getLabel()}"
	description_condition="$relationship"
	class="xf-copy-related-records left-btn related-selected-action"
	

	
[update_related]
	category=related_list_actions
	url="{$this->url('-action=copy_replace&-from='.$query['-action'])}"
	order="-99"
	label="Update"
	description="Update values in selected {$relationship->getLabel()}"
	description_condition="$relationship"
	class="xf-update-related-records middle-btn related-selected-action"
	permission = update related records
	
[remove_related]
	category=related_list_actions
	url="{$this->url('-action=remove_related_record')}&-from={$query['-action']}"
	order="-98"
	label="Remove"
	description="Remove selected rows from {$relationship->getLabel()}"
	description_condition="$relationship"
	class="xf-remove-related-records right-btn related-selected-action"
	permission = remove related record
	condition="$relationship and $relationship->supportsRemove()"
	
	
[new > new]
	label="New {$tableObj->getSingularLabel()}"
	label_condition="$tableObj"
	description="Insert a new {$tableObj->getSingularLabel()} into {$tableObj->getLabel()}"
	description_condition="$tableObj"
	condition="!$tableObj or !$tableObj->isSingleton()"
	
[import > import]
	label="Import {$tableObj->getLabel()}"
	label_condition="$tableObj"
	
[cancel_add_new_related_record]
	label="Cancel"
	description="Cancel this form.  Return to {$relationship->getLabel()}"
	description_condition="$relationship"
	url="{$this->url('-action=related_records_list')}"
	category=add_new_related_record_actions
	order="-1000"
	
	
[save_add_new_related_record]
	label="Save"
	description="Save this form."
	url="#"
	category=add_new_related_record_actions
	order=-999
	class="xf-save-new-related-record"
	
[cancel_new_record_form]
	label="Cancel"
	description="Cancel this form.  Return to list view."
	url="{$this->url('-action=list')}"
	category=new_record_form_actions
	order=-1000
	
	
[save_new_record_form]
	label="Save"
	description="Save this form"
	url="#"
	category="new_record_form_actions"
	order=-999
	class="xf-save-new-record"
	
[cancel_edit_record_form > cancel_new_record_form]
	url="{$this->url('-action=view')}"
	category=edit_record_form_actions
	description="Cancel editing.  Return to view mode."
	
[save_edit_record_form > save_new_record_form]
	category=edit_record_form_actions
	
[personal_menu]
	category=top_right_menu_bar
	label="{$this->getAuthenticationTool()->getLoggedInUserName()}"
	label_condition="$this->getAuthenticationTool()"
	condition="$this->getAuthenticationTool() and $this->getAuthenticationTool()->isLoggedIn()"
	subcategory=personal_tools
	order=-100
	
[control_panel]
	category=top_right_menu_bar
	label="Control Panel"
	permission="manage"
	order=-101
	subcategory=management_actions
	
;[languages]
;	category=top_right_menu_bar
;	label="Language"
;	permission="view"
	
	
[view_menu]
	category=result_list_actions
	label="View"
	subcategory=table_tabs
	order=-2000
	class="list-view-menu"
	
[browse > browse]
	category=""
	
[find > find]
	category=""
	

[configure_advanced_search_form]
	class="configure-advanced-find-form-action"
	category=advanced_search_actions
	url="{$this->url('-action=show_hide_columns')}&--relationships=*&--visibility-types=find"
	label="Configure Search Form..."
	permission="show hide columns"	
	condition="@$this->_conf['user_config_enabled']"
	
[new_window]
    category=record_actions
    label="Open in new window"
    condition="$query['-ui-root']=='main-content'"
    target="_blank"
    url="{$this->url('-ui-root=')}"

[new_window_edit > new_window]
    category=edit_record_form_actions
	
