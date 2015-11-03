(function (Pointer, AST, Runtime) {
    "use strict";

    BigMess.Script = Script;
    function Script() {
        this.pointer = new Pointer();
        this.ast = new AST();
        // Keep a reference t key named nodes
        this.references = {};
        this.runtime;
    }

    Script.prototype.load = function (text) {
        this.pointer.tokenize(text);
        this.compile(this.pointer.tokens); // Todo.. this should not be compile
        return this;
    };

    Script.prototype.run = function (state) {
        var self = this;
        this.runtime = new Runtime(this.ast, state, onModeChange);
        this.runtime.run();

        function onModeChange(mode, node){
            console.log("Keeping reference to [" + node.value + "]", mode, node);
            var nodeReferenceId = node.value;
            self.references[nodeReferenceId.toLowerCase()] = node;
        }
    };

    Script.prototype.compile = function (tokens) {
        this.ast.compile(tokens);
        return this;
    };

})(BigMess.Pointer, BigMess.AST, BigMess.Runtime);

