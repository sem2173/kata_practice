require './katapotter'

describe "katapotter discount" do

    it" book1 cost 8" do
        expect(cart('book1')).to eq(8)
    end
end

