webpackJsonp([50],{925:function(t,e,o){var n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function o(){this.constructor=t}for(var n in e)r.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].slice;t.exports=Promise.all([new Promise(function(t){t()}).then(o.bind(null,2)),new Promise(function(t){t()}).then(o.bind(null,106)),new Promise(function(t){t()}).then(o.bind(null,33)),o.e(27).then(o.bind(null,851)),new Promise(function(t){t()}).then(o.bind(null,52)),o.e(29).then(o.bind(null,853)),o.e(91).then(o.bind(null,1088)),o.e(49).then(o.bind(null,931)),o.e(172).then(o.bind(null,1342)),o.e(170).then(o.bind(null,1235)),o.e(230).then(o.bind(null,1343)),o.e(525).then(o.bind(null,1448)),o.e(25).then(o.bind(null,849)),o.e(69).then(o.bind(null,1017)),o.e(40).then(o.bind(null,901)),o.e(56).then(o.bind(null,944)),o.e(135).then(o.bind(null,1236)),o.e(169).then(o.bind(null,1344)),o.e(896).then(o.bind(null,2119))]).then(function(){return function(t,e,o,r,a,l,u,c,p,d,_,h,m,y,f,g,w,b){var v,A,S;return A=o.template("<div class='"+a.classNames("coffeescripts/lib/associations").join(" ")+" association'>\n  <% if (typeof url === 'undefined') { %>\n    <span class='association_name'><%- name %></span>\n  <% } else { %>\n    <a class='association_name' href='<%- url %>' target='_blank'><%- name %></a>\n  <% } %>\n  <% if (typeof allowDelete === 'undefined' || allowDelete) { %>\n    <span class='destroy'>&times;</span>\n  <% } %>\n</div>"),S=o.template("<div class='g-lockup medium'>\n  <div class='photo'><img src='<%- photo %>' /></div>\n    <div class='text'>\n      <div class='name'>\n        <a href='<%- url %>' target='_blank'><%- name %></a>\n        <% if (typeof allowDelete === 'undefined' || allowDelete) { %>\n          <span class='destroy'>&times;</span>\n        <% } %>\n      </div>\n    </div>\n  </div>\n</div>"),{AssociationField:v=function(e){function r(){return this.associations=n(this.associations,this),this._submit=n(this._submit,this),this._keypress=n(this._keypress,this),this._click_destroy=n(this._click_destroy,this),this._select=n(this._select,this),r.__super__.constructor.apply(this,arguments)}return i(r,e),r.prototype.associationFromSelect=function(t,e,o){throw new Error("Subclasses must override")},r.prototype.associationFromSubmit=function(t,e){throw new Error("Subclasses must override")},r.prototype.renderInnerContainer=function(){return t("<div class='"+a.classNames("coffeescripts/lib/associations").join(" ")+" container' />")},r.prototype.renderAssociation=function(t){throw new Error("Subclasses must override")},r.prototype.renderEmpty=function(t){return this.$container.toggle(!t)},r.prototype.initializeAutocomplete=function(){throw new Error("Subclasses must override")},r.prototype.destroySelector=".destroy",r.prototype.submitSelector=".submit",r.prototype.input=function(){return this.$("input[type=text]")[0]},r.prototype.isEditable=function(){return this._editable||(this._editable=null!=this.input()),this._editable},r.prototype.render=function(){var e,n,i;return n=this.$container,null==this.$container?this:(e=this.associations(),n.empty(),this.renderEmpty(0===e.length),e.length>0?(i=this.renderInnerContainer(),n.append(i),o.each(e,function(e){return function(o){var n;return(n=t(e.renderAssociation(o))).data("association",o),n.addClass("association_parent",!0),n.appendTo(i)}}(this))):void 0)},r.prototype.initialize=function(e){if(this.options=e,null==this.collection)throw new Error("Collection must be provided");if(null==e.container)throw new Error("Association container must be provided, (or you can pass container: false if no container exists)");return e.container?this.$container=t(e.container):this.$container=null,this.listenTo(this.collection,"add remove change reset",o.throttle(function(t){return function(){return t.render(),t.trigger("change",t)}}(this),100)),this.autocomplete=this.initializeAutocomplete(),this.listenTo(this.autocomplete,"select",this._select),this.render()},r.prototype.events=function(){var t;return t={},t["click "+o.result(this,"destroySelector")]="_click_destroy",t["click "+o.result(this,"submitSelector")]="_submit",t.keypress="_keypress",t},r.prototype._select=function(){var e,o;return e=1<=arguments.length?s.call(arguments,0):[],o=this.associationFromSelect.apply(this,e),this.addAssociation(o),t(this.input()).val(""),!0},r.prototype._click_destroy=function(e){var o;return(o=t(e.currentTarget).closest(".association_parent")).fadeOut("fast",function(t){return function(){return t.removeAssociation(o.data("association"))}}(this)),!0},r.prototype._keypress=function(e){return 13===e.keyCode&&t(this.input()).is(e.srcElement)&&this._submit(e),!0},r.prototype._submit=function(e){var o;return e.preventDefault(),(o=this.associationFromSubmit(t(this.input()).val(),e))&&(this.addAssociation(o),t(this.input()).val("")),!0},r.prototype.associations=function(){return this.collection.models},r.prototype.addAssociation=function(t){return t.save(),this.collection.add(t)},r.prototype.removeAssociation=function(t){return t.destroy()},r}(e.View),BaseField:function(t){function o(){return o.__super__.constructor.apply(this,arguments)}return i(o,v),o.prototype.associationFromSelect=function(t){return new e.Model(t)},o.prototype.renderAssociation=function(t){return A({name:t.get("name"),url:t.get("url"),allowDelete:this.isEditable()})},o.prototype.addAssociation=function(t){return this.collection.add(t)},o.prototype.removeAssociation=function(t){return this.collection.remove(t)},o.prototype.associationFromSubmit=function(t){return new e.Model({name:t})},o}(),StartupField:function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,v),e.prototype.initialize=function(t){return this.collection||(this.collection=t.collection||m.get(f)),e.__super__.initialize.apply(this,arguments)},e.prototype.associationFromSubmit=function(){return null},e.prototype.associationFromSelect=function(t,e){return e.model},e.prototype.renderAssociation=function(t){return S({name:t.get("company_name"),url:t.get("slug_url"),photo:t.get("logo_url"),allowDelete:this.isEditable()})},e.prototype.addAssociation=function(t){return this.collection.add(t)},e.prototype.removeAssociation=function(t){return this.collection.remove(t)},e.prototype.initializeAutocomplete=function(){var t;return t={el:this.input(),model:new f},new l.TagAutocomplete(t)},e}(),UserField:function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,v),e.prototype.initialize=function(t){return this.collection||(this.collection=t.collection||m.get(y)),e.__super__.initialize.apply(this,arguments)},e.prototype.associationFromSubmit=function(){return null},e.prototype.associationFromSelect=function(t){return new y({id:t.id,display_name:t.name,slug_url:t.url,pic:t.pic})},e.prototype.renderAssociation=function(t){return A({name:t.get("display_name"),url:t.get("slug_url"),allowDelete:this.isEditable()})},e.prototype.addAssociation=function(t){return this.collection.add(t)},e.prototype.removeAssociation=function(t){return this.collection.remove(t)},e}(),NewTaggingField:function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,v),n.prototype.initialize=function(){return this.collection||(this.collection=m.get(c)),n.__super__.initialize.apply(this,arguments)},n.prototype.associations=function(){return this.collection.where({new_taggable_type:this.options.new_taggable_type,new_taggable_id:this.options.new_taggable_id,new_taggable_field:this.options.new_taggable_field})},n.prototype.baseAttributes=function(){var t,e,o,n,i;for(t={},o=0,n=(i=["new_taggable_field","new_taggable_type","new_taggable_id"]).length;o<n;o++){if(e=i[o],null==this.options[e])throw new Error("Option '"+e+"' is required");t[e]=this.options[e]}return t},n.prototype.associationFromSelect=function(e,o,n){return e.new_tagging_field_unmatched?this.associationFromSubmit(e.term,n):new c(t.extend({},this.baseAttributes(),{new_tag_id:o.model.id,new_tag:o.model.toJSON()}))},n.prototype.associationFromSubmit=function(e,o){if("LocationTag"!==this.options.tag_type)return new c(t.extend({},this.baseAttributes(),{new_tag:{name:e,tag_type:this.options.tag_type,display_name:e.toTitleCase()}}))},n.prototype.renderAssociation=function(t){return A({name:t.get("new_tag").display_name,url:t.get("new_tag").slug_url,allowDelete:this.isEditable()})},n.prototype.initializeAutocomplete=function(){var t,e;return e={el:this.input(),parameters:{tag_type:this.options.tag_type||function(){throw new Error("Option 'tag_type' is required")}(),new_taggable_field:this.options.new_taggable_field||function(){throw new Error("Option 'new_taggable_field' is required")}(),new_taggable_type:this.options.new_taggable_type||function(){throw new Error("Option 'new_taggable_type' is required")}(),new_taggable_id:this.options.new_taggable_id},model:new p({tag_type:this.options.tag_type})},t=this.options.allowUnmatched,new(function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return i(o,e),o.prototype.process_response=function(e,n){var i;return i=o.__super__.process_response.apply(this,arguments),t&&i.push({value:{new_tagging_field_unmatched:!0,term:n},label:l.more_template("Add")({term:n})}),i},o}(l.TagAutocomplete))(e)},n.prototype.addAssociation=function(e){return e.save(null,{error:function(n){return function(i,s){var a;return(a=t.parseJSON(s.responseText)).errors&&r(o.values(a.errors).join("; "),4e3),n.collection.remove(e)}}(this)}),this.collection.add(e)},n}(),CollegeField:function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,v),n.prototype.initialize=function(){return this.collection||(this.collection=m.get(u)),n.__super__.initialize.apply(this,arguments)},n.prototype.associations=function(){return o.uniq(this.collection.models,!1,function(t){return t.get("new_tag_id")})},n.prototype.removeAssociation=function(t){var e;return e=o.filter(this.collection.models,function(e){return e.get("new_tag_id")===t.get("new_tag_id")}),o.each(e,function(t){return t.destroy()})},n.prototype.associationFromSelect=function(t,e,o){return t.new_tagging_field_unmatched?this.associationFromSubmit(t.term,o):new u({user_id:this.options.user_id,new_tag_id:t.tag.id,new_tag:t.tag})},n.prototype.associationFromSubmit=function(t){return new u({user_id:this.options.user_id,new_tag:{name:t,tag_type:"CollegeTag",display_name:t.toTitleCase()}})},n.prototype.renderAssociation=function(t){return A({name:t.get("new_tag").display_name,url:t.get("new_tag").slug_url,allowDelete:this.isEditable()})},n.prototype.initializeAutocomplete=function(){return new l.TagAutocomplete({el:this.input(),parameters:{tag_type:"CollegeTag"},model:new u})},n.prototype.addAssociation=function(e){return e.save(null,{error:function(n){return function(i,s){var a;return(a=t.parseJSON(s.responseText)).errors&&r(o.values(a.errors).join("; "),4e3),n.collection.remove(e)}}(this)}),this.collection.add(e)},n}(),NewTagField:function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,v),e.prototype.associationFromSubmit=function(){return null},e.prototype.associationFromSelect=function(t){return new p(t.tag)},e.prototype.initialize=function(t){if(this.tagType||(this.tagType=null!=t?t.tagType:void 0),null==this.tagType)throw new Error("Tag type is required");return e.__super__.initialize.apply(this,arguments)},e.prototype.renderAssociation=function(t){return A({name:t.get("display_name"),url:t.get("slug_url"),allowDelete:this.isEditable()})},e.prototype.addAssociation=function(t){return this.collection.add(t)},e.prototype.removeAssociation=function(t){return this.collection.remove(t)},e.prototype.initializeAutocomplete=function(){var t;return t={el:this.input(),tag_type:this.tagType},new l.TagAutocomplete(t)},e}(),StartupRoleField:function(e){function o(){return o.__super__.constructor.apply(this,arguments)}return i(o,v),o.prototype.initialize=function(){return this.collection||(this.collection=m.get(g)),o.__super__.initialize.apply(this,arguments)},o.prototype.associations=function(){return this.collection.where({tagged_id:this.options.tagged_id,tagged_type:this.options.tagged_type,role:this._role()})},o.prototype.baseAttributes=function(){var t,e,o,n,i;for(t={},o=0,n=(i=["tagged_id","tagged_type"]).length;o<n;o++){if(e=i[o],null==this.options[e])throw new Error("Option '"+e+" is required");t[e]=this.options[e]}return t.role=this._role(),t},o.prototype._role=function(){if(null==this.options.role)throw new Error("Option 'role' is required");return this.options.role},o.prototype.initializeAutocomplete=function(){return new l.TagAutocomplete({el:this.input(),model:new f})},o.prototype.associationFromSelect=function(e,o,n){return new g(t.extend({},this.baseAttributes(),{startup_id:o.model.id,startup_company_name:o.model.get("company_name"),startup_slug_url:o.model.get("slug_url"),startup_avatar:o.model.get("avatar"),startup_high_concept:o.model.get("high_concept")}))},o.prototype.associationFromSubmit=function(e,o){if(e)return new g(t.extend({},this.baseAttributes(),{company_name:e,startup_company_name:e}))},o.prototype.renderAssociation=function(t){return A({name:t.get("startup_company_name"),url:t.get("startup_slug_url")})},o}(),StartupRoundParticipantField:function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,v),e.prototype.initialize=function(){if(!(null!=this.model&&this.model instanceof w))throw new Error("Must provide a StartupRound model");if(!this.model.has("startup_id"))throw new Error("Must provide a startup ID");return e.__super__.initialize.apply(this,arguments)},e.prototype.renderAssociation=function(t){return A({url:t.get("participant_slug_url"),name:t.get("participant_to_s")})},e.prototype.initializeAutocomplete=function(){return new l.TagAutocomplete({el:this.input(),tag_type:["User","Startup"]})},e.prototype.associationFromSubmit=function(){return!1},e.prototype.associationFromSelect=function(t){return new b({participant_id:t.tag.id,participant_type:t.tag.model,startup_round_id:this.model.id,participant_slug_url:t.tag.slug_url,participant_to_s:t.tag.display_name})},e.prototype.addAssociation=function(t){return this.collection.add(t)},e.prototype.associations=function(){return this.model.isNew()?this.collection.models:this.collection.where({startup_round_id:this.model.id})},e}(),CollaboratorTaggingField:function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,v),n.prototype.initialize=function(){if(null==this.model)throw new Error("Must provide a model");return n.__super__.initialize.apply(this,arguments)},n.prototype.collaborationType=function(){switch(!1){case!(this.model instanceof d):return"Project";case!(this.model instanceof h):return"JobListing";case!(this.model instanceof c):return"NewTagging";case!(this.model instanceof u):return"Degree";default:throw new Error("Collaboration type not allowed")}},n.prototype.renderAssociation=function(t){return A({url:t.get("collaborator_slug_url")||void 0,name:t.get("collaborator_to_s")})},n.prototype.initializeAutocomplete=function(){return new l.TypedAutocomplete({el:this.input(),types:["User"],canSelectUnmatchedQuery:this.options.unmatched})},n.prototype.associationFromSubmit=function(t,e){return new _({collaboration_id:this.model.id,collaboration_type:this.collaborationType(),invited_name:t,collaborator_to_s:t})},n.prototype.associationFromSelect=function(t){return new _({collaboration_id:this.model.id,collaboration_type:this.collaborationType(),collaborator_id:t.id,collaborator_type:"User",collaborator_slug_url:t.url,collaborator_to_s:t.name,collaborator_avatar:t.pic})},n.prototype.addAssociation=function(e){return e.save(null,{error:function(n){return function(i,r){var s;return(s=t.parseJSON(r.responseText)).errors&&n.$(".error").html(o.values(s.errors)[0]).fadeIn().delay(4e3).fadeOut(),n.collection.remove(e)}}(this)}),this.collection.add(e)},n.prototype.associations=function(){return this.collection.models},n}()}}.apply(void 0,arguments[0])}.bind(this))}});