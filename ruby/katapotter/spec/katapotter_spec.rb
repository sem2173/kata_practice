require './katapotter'

describe "katapotter discount" do

    it" book1 cost 8" do
        expect(cart(["book1"])).to eq(8)
    end

    it" two books1 cost 16" do
        expect(cart(["book1","book1"])).to eq(16)
    end

    it" discount 5% for book1 and book2 " do
        expect(cart(["book1","book2"])).to eq(15.2)
    end
end

