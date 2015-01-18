describe("getRomanToNumber", function() {
    
  it("I donne 1", function() {
      expect(getRomanToNumber("I")).toEqual(1);
  
  });

   it("II donne 2", function() {
      expect(getRomanToNumber("II")).toEqual(2);
  
  });

   it("II donne 3", function() {

    expect(getRomanToNumber("III")).toEqual(3);
   });
 
});

  