describe("Roman", function() {
    
  it("I donne 1", function() {
      expect(Roman("I")).toEqual(1);
  
  });

   it("II donne 2", function() {
      expect(Roman("II")).toEqual(2);
  
  });

   it("II donne 3", function() {

    expect(Roman("III")).toEqual(3);
   });
 
});

  