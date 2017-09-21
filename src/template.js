export default `<table class='plates'>
  <thead>
    <tr>
      <th>&nbsp;</th>
      {{#each xData}}
      <th style='{{style}}'>{{index}}</th>
      {{/each}}
    </tr>
  </thead>
  <tbody>
  {{#each yData}}
    <tr>
      <th style='width: 5%'>{{this}}</th>
      {{#each ../xData}}
      <td style='{{style}}'>&nbsp;</td>
      {{/each}}
    </tr>
  {{/each}}
  </tbody>
</table>`;
