(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(13),s=n(12),l=n(2),u=n(3),b=n(5),d=n(4),m=n(21),p=n(6),j=n.n(p),h=n(0),f=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onSubmit,n=t.onChange;return Object(h.jsxs)("form",{onSubmit:e,className:j.a["contact-form"],children:[Object(h.jsxs)("label",{className:j.a["contact-label"],children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n,className:j.a["contact-input"]})]}),Object(h.jsxs)("label",{className:j.a["contact-label"],children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n,className:j.a["contact-input"]})]}),Object(h.jsx)("button",{type:"submit",className:j.a["add-contact-btn"],children:"Add contact"})]})}}]),n}(a.Component),O=n(7),_=n.n(O),C=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,a=t.number,c=t.deleteContact;return Object(h.jsxs)("div",{className:_.a["contact-wrapper"],children:[Object(h.jsxs)("li",{className:_.a["contact-li"],children:[n,": ",a]},e),Object(h.jsx)("button",{className:_.a["delete-btn"],type:"button",onClick:function(){return c(e)},children:"Delete"})]})}}]),n}(a.Component),x=n(8),v=n.n(x),y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.contacts,a=t.deleteContact;return Object(h.jsxs)("div",{className:v.a["contact-wrapper"],children:[e,n.length?Object(h.jsx)("ul",{className:v.a["contact-list"],children:n.map((function(t){return Object(h.jsx)(C,{id:t.id,name:t.name,number:t.number,deleteContact:a})}))}):Object(h.jsx)("p",{className:v.a["absent-contact"],children:"Such contact is absent"})]})}}]),n}(a.Component),N=n(9),g=n.n(N),w=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:g.a["filter-wrapper"],children:Object(h.jsxs)("label",{className:g.a["filter-label"],children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"name",onChange:this.props.filtredName,className:g.a["filter-input"]})]})})}}]),n}(a.Component),S=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.handleChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.state.contacts.some((function(e){return e.name===t.state.name}))?alert("".concat(t.state.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:t.name,number:t.number,id:Object(m.a)()}])}}))},t.filterByName=function(e){var n=e.target.value.toLowerCase();t.setState({filter:n})},t.getFilterName=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{onSubmit:this.handleSubmit,onChange:this.handleChange}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(w,{filtredName:this.filterByName}),Object(h.jsx)(y,{contacts:this.getFilterName(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__1Mydw","contact-label":"ContactForm_contact-label__j0cwn","contact-input":"ContactForm_contact-input__2PC9_","add-contact-btn":"ContactForm_add-contact-btn__3edUe"}},7:function(t,e,n){t.exports={"contact-wrapper":"Contact_contact-wrapper__yP_P3","contact-li":"Contact_contact-li__14XOz","delete-btn":"Contact_delete-btn__3NJKA"}},8:function(t,e,n){t.exports={"contact-wrapper":"ContactList_contact-wrapper__1AoK-","contact-list":"ContactList_contact-list__1MVGu","absent-contact":"ContactList_absent-contact__1OFDK"}},9:function(t,e,n){t.exports={"filter-wrapper":"Filter_filter-wrapper__1AD2U","filter-label":"Filter_filter-label__1DVzw","filter-input":"Filter_filter-input__Gnhkw"}}},[[19,1,2]]]);
//# sourceMappingURL=main.d9de0c03.chunk.js.map