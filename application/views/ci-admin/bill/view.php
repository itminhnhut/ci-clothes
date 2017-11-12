<h2>Đây là trang view của bill</h2>
<form>
   <table class="table table-hover">
      <thead>
         <tr>
            <th>STT</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
         </tr>
      </thead>
      <tbody>
         <?php
            $i = 1;
            foreach($data as $key => $value):
         ?>
         <tr>
            <td><?php echo $i++ ?></td>
            <td><?php echo $value['nameProdcut']; ?></td>
            <td><?php echo number_format($value['price']).' VNĐ'; ?></td>
            <td><?php echo $value['quantity']; ?></td>
            <td><?php echo number_format($value['price'] * $value['quantity']).' VNĐ' ?></td>
         </tr>
         <?php if($i ==(count($data)+1)): ?>
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total : </td>
            <td>100.000 VNĐ</td>
         </tr>
         <?php endif; ?>
         <?php endforeach; ?>

      </tbody>
   </table>
</form>