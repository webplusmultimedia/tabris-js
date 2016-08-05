tabris.registerWidget("SearchAction", {

  _type: "tabris.SearchAction",

  _properties: {
    image: {type: "image", default: null},
    placementPriority: {type: ["choice", ["low", "high", "normal"]], default: "normal"},
    title: {type: "string", default: ""},
    proposals: {default: function() {return [];}},
    text: {type: "string", nocache: true},
    message: {type: "string", default: ""}
  },

  _events: {
    input: {
      trigger: function(event) {
        this.trigger("input", this, event.text, {});
      }
    },
    accept: {
      trigger: function(event) {
        this.trigger("accept", this, event.text, {});
      }
    },
    select: {
      trigger: function(event) {
        this.trigger("select", this, event);
      }
    }
  },

  _create: function() {
    this._super("_create", arguments);
    tabris.ui.append(this);
    return this;
  },

  open: function() {
    this._nativeCall("open", {});
    return this;
  }

});
