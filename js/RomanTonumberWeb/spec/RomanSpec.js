describe("getRomanToNumber", function() {
    
  it("I donne 1", function() {
      expect(getRomanToNumber("I")).toEqual(1);
  
  });

   it("II donne 2", function() {
      expect(getRomanToNumber("II")).toEqual(2);
  
  });

   it("III donne 3", function() {

    expect(getRomanToNumber("III")).toEqual(3);
   });

   it("V donne 5", function() {

    expect(getRomanToNumber("V")).toEqual(5);
   });

   it("VI donne 6", function() {

    expect(getRomanToNumber("VI")).toEqual(6);
   });

   it("VII donne 7", function() {

    expect(getRomanToNumber("VII")).toEqual(7);
   });
 
});

  