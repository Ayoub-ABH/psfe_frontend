import React, { Component } from 'react'

export default class BreadCrumb extends Component {
  render() {
    return (
      <div>
		<div id="breadcrumb" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h3 class="breadcrumb-header">Regular Page</h3>
						<ul class="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li class="active">Blank</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
      </div>
    )
  }
}
