          
          <!-- Show bootstrap alert for empty data template in asp.net form -->
          <asp:GridView ID="gvLinks" runat="server" GridLines="None">
                <emptydatatemplate>
                    <div class="alert alert-info">
                        You haven't added any links yet, please click <a href="Pages/Links/Add"><b>here</b></a> to start adding your favorite links.
                    </div>
                </emptydatatemplate>
            </asp:GridView>
