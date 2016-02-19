var nil = Object.create({
  isNil: true,
  valueOf: function() { return undefined }
});
(global || window).nil = nil;
Object.prototype.isNil = false;
