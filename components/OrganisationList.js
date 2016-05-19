import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrganisationListRow from './OrganisationListRow'

export class OrganisationList extends Component {

    render() {
		var numberOfOrgs = this.props.organisations.length;
		var rows = [];
		var counter = 0;
		for(var i=0; i<numberOfOrgs; i++) {
			rows.push(<OrganisationListRow name={this.props.organisations[i].name} id={this.props.organisations[i].id} key={counter}/>);
			counter++;
		};
		return(
            <table className="table table-striped table-bordered table-hover">
				<thead className="thead">
						<th>Name</th>
						<th>Id</th>
				</thead>
				<tbody className="tbody">
					{rows}
				</tbody>
			</table>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    organisations: state.organisations
  }
}

export default connect(
    mapStateToProps
)(OrganisationList)
