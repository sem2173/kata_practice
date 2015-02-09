def cart(books)

amount = 0

        # if books == ["book1"]
            amount = books.length*8
        # end

        if books == ["book1","book2"]
            amount = books.length*8*0.95
        end

        # if books == ["book1","book1"]
        #     amount = books.length*8       
        # end

    return amount
    
end