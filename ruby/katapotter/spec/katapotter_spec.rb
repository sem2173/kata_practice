require './katapotter'

describe "katapotter discount" do

    it" book1 cost 8" do
        expect(cart('book1')).to eq(8)
    end

    it" two books1 cost 16" do
        expect(cart('book2')).to eq(16)
    end
end

