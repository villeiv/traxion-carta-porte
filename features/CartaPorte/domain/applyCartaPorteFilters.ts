function applyCartaPorteFilters(data, filters) {

    //si no hay filtros, fuera
    if (!filters || filters.size === 0) return data;

    let filteredData = {...data};
    let tripStageStatus = data.trip_stage_status;

    //filtro por id
    const idFilter = filters.get("id");
    if (idFilter) {
        const value = idFilter.toString().toLowerCase();
        tripStageStatus = tripStageStatus.filter(tripStg => tripStg.name.toLowerCase().includes(value));
    }

    //filtro por empresa
    const companyFilter = filters.get("company");
    if (companyFilter) {
        const value = companyFilter.toString().toLowerCase();
        tripStageStatus = tripStageStatus.filter(tripStg => tripStg.company.toLowerCase() === value);
    }

    //filtro por cliente
    const clientFilter = filters.get("client");
    if (clientFilter) {
        const value = clientFilter.toString().toLowerCase();
        tripStageStatus = tripStageStatus.filter(tripStg => tripStg.client.toLowerCase() === value);
    }

    //filtro por status
    const statusFilter = filters.get("status");
    if (statusFilter) {
        const value = statusFilter.toString().toLowerCase();
        tripStageStatus = tripStageStatus.filter(tripStg => tripStg.status.toLowerCase() === value);
    }

    //filtro por fecha
    const dateFilter = filters.get("dates");
    if (dateFilter) {
        const startDate = new Date(dateFilter.split(",")[0]);
        const endDate = new Date(dateFilter.split(",")[1]);

        console.log("startDate:", startDate, "endDate:", endDate)

        tripStageStatus = tripStageStatus.filter(tripStg => {
            const tripDate = new Date(tripStg.trip_planned_start_at);
            /*if(tripDate >= startDate && tripDate <= endDate){
                console.log(tripDate);
            }else{
                console.error(tripDate)
            }*/
            return tripDate >= startDate && tripDate <= endDate;
        })
    }

    filteredData = {
        ...filteredData,
        trip_stage_status: tripStageStatus,
    };

    return filteredData;
}

export default applyCartaPorteFilters;