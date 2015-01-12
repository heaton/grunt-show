/*global module:false*/
module.exports = function (grunt) {

    grunt.registerTask('t1',function() {
        console.log("this is task 1");
        setTimeout(function(){
            console.log("this is task 1 in setTimeout");
        }, 0);
    });

    grunt.registerTask('t2',function() {
        var done = this.async();
        console.log("this is task 2");
        process.nextTick(function () {
            console.log("this is task 2 in nextTick");
            done(true);
        });
    });

    grunt.registerTask('mm', ['t1', 't2']);
};

