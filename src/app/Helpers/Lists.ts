export class TodoStates {

    public getStates(): object[] {
        return [
            {
                "id": 1,
                "name": "Pendiente",
                "icon": "clock",
                "color": "warning"
            },
            {
                "id": 2,
                "name": "Finalizada",
                "icon": "checkmark-circle",
                "color": "success"

            },
            {
                "id": 3,
                "name": "Pruebas",
                "icon": "flask",
                "color": "primary"
            },
            {
                "id": 4,
                "name": "Canelada",
                "icon": "close-circle-outline",
                "color": "danger"

            }
        ]
    }
}