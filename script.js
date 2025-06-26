class GradeCalculator {
    constructor() {
        this.courses = [];
        this.courseIdCounter = 0;
        this.initializeEventListeners();
        this.loadDefaultCourses();
    }

    loadDefaultCourses() {
        const defaultCourses = [
            {
                name: "Taller de Tesis",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.1 },
                            { name: "Componente 2", weight: 0.1 },
                            { name: "Componente 3", weight: 0.35 },
                            { name: "Componente 4", weight: 0.3 },
                            { name: "Componente 5", weight: 0.15 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 35,
                        components: [
                            { name: "Componente 1", weight: 0.1 },
                            { name: "Componente 2", weight: 0.25 },
                            { name: "Componente 3", weight: 0.3 },
                            { name: "Componente 4", weight: 0.35 }
                        ]
                    },
                    {
                        name: "Unidad 3",
                        weight: 35,
                        components: []
                    }
                ]
            },
            {
                name: "Seguridad de Tecnología de Información",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.25 },
                            { name: "Componente 2", weight: 0.3 },
                            { name: "Componente 3", weight: 0.1 },
                            { name: "Componente 4", weight: 0.35 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.25 },
                            { name: "Componente 2", weight: 0.3 },
                            { name: "Componente 3", weight: 0.1 },
                            { name: "Componente 4", weight: 0.35 }
                        ]
                    },
                    {
                        name: "Unidad 3",
                        weight: 40,
                        components: []
                    }
                ]
            },
            {
                name: "Construcción de Software II",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.1 },
                            { name: "Componente 2", weight: 0.3 },
                            { name: "Componente 3", weight: 0.5 },
                            { name: "Componente 4", weight: 0.1 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.1 },
                            { name: "Componente 2", weight: 0.4 },
                            { name: "Componente 3", weight: 0.4 },
                            { name: "Componente 4", weight: 0.1 }
                        ]
                    },
                    {
                        name: "Unidad 3",
                        weight: 40,
                        components: []
                    }
                ]
            },
            {
                name: "Auditoría de Sistemas",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.15 },
                            { name: "Componente 2", weight: 0.25 },
                            { name: "Componente 3", weight: 0.35 },
                            { name: "Componente 4", weight: 0.25 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.15 },
                            { name: "Componente 2", weight: 0.25 },
                            { name: "Componente 3", weight: 0.35 },
                            { name: "Componente 4", weight: 0.25 }
                        ]
                    },
                    {
                        name: "Unidad 3",
                        weight: 40,
                        components: [
                            { name: "Componente 1", weight: 0.15 },
                            { name: "Componente 2", weight: 0.25 },
                            { name: "Componente 3", weight: 0.35 },
                            { name: "Componente 4", weight: 0.25 }
                        ]
                    }
                ]
            },
            {
                name: "Taller de Emprendimiento y Liderazgo",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.4 },
                            { name: "Componente 2", weight: 0.4 },
                            { name: "Componente 3", weight: 0.2 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 30,
                        components: []
                    },
                    {
                        name: "Unidad 3",
                        weight: 40,
                        components: []
                    }
                ]
            },
            {
                name: "Gerencia de Tecnologías de Información",
                units: [
                    {
                        name: "Unidad 1",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.3 },
                            { name: "Componente 2", weight: 0.6 },
                            { name: "Componente 3", weight: 0.1 }
                        ]
                    },
                    {
                        name: "Unidad 2",
                        weight: 30,
                        components: [
                            { name: "Componente 1", weight: 0.3 },
                            { name: "Componente 2", weight: 0.6 },
                            { name: "Componente 3", weight: 0.1 }
                        ]
                    },
                    {
                        name: "Unidad 3",
                        weight: 40,
                        components: [
                            { name: "Componente 1", weight: 0.3 },
                            { name: "Componente 2", weight: 0.6 },
                            { name: "Componente 3", weight: 0.1 }
                        ]
                    }
                ]
            }
        ];

        // Crear los cursos con la estructura predefinida
        defaultCourses.forEach(courseData => {
            const course = {
                id: this.courseIdCounter++,
                name: courseData.name,
                units: []
            };

            courseData.units.forEach(unitData => {
                const unit = {
                    id: Date.now() + Math.random(),
                    name: unitData.name,
                    weight: unitData.weight,
                    components: []
                };

                unitData.components.forEach(compData => {
                    const component = {
                        id: Date.now() + Math.random(),
                        name: compData.name,
                        weight: compData.weight,
                        grade: 0
                    };
                    unit.components.push(component);
                });

                course.units.push(unit);
            });

            this.courses.push(course);
        });

        // Renderizar todos los cursos
        this.renderAllCourses();
        this.updateSummary();
    }

    initializeEventListeners() {
        document.getElementById('addCourse').addEventListener('click', () => {
            const courseName = document.getElementById('courseName').value.trim();
            if (courseName) {
                this.addCourse(courseName);
                document.getElementById('courseName').value = '';
            } else {
                alert('Por favor, ingrese un nombre para el curso');
            }
        });

        document.getElementById('courseName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('addCourse').click();
            }
        });
    }

    addCourse(name) {
        const course = {
            id: this.courseIdCounter++,
            name: name,
            units: []
        };
        
        this.courses.push(course);
        this.renderCourse(course);
        this.updateSummary();
    }

    addUnit(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            const unit = {
                id: Date.now(),
                name: `Unidad ${course.units.length + 1}`,
                weight: 0,
                components: []
            };
            course.units.push(unit);
            this.renderCourse(course);
        }
    }

    addComponent(courseId, unitId) {
        const course = this.courses.find(c => c.id === courseId);
        const unit = course?.units.find(u => u.id === unitId);
        
        if (unit) {
            const component = {
                id: Date.now(),
                name: `Componente ${unit.components.length + 1}`,
                weight: 0,
                grade: 0
            };
            unit.components.push(component);
            this.renderCourse(course);
        }
    }

    removeCourse(courseId) {
        if (confirm('¿Está seguro de que desea eliminar este curso?')) {
            this.courses = this.courses.filter(c => c.id !== courseId);
            document.getElementById(`course-${courseId}`).remove();
            this.updateSummary();
        }
    }

    removeUnit(courseId, unitId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            course.units = course.units.filter(u => u.id !== unitId);
            this.renderCourse(course);
        }
    }

    removeComponent(courseId, unitId, componentId) {
        const course = this.courses.find(c => c.id === courseId);
        const unit = course?.units.find(u => u.id === unitId);
        
        if (unit) {
            unit.components = unit.components.filter(c => c.id !== componentId);
            this.renderCourse(course);
        }
    }

    updateUnitWeight(courseId, unitId, weight) {
        const course = this.courses.find(c => c.id === courseId);
        const unit = course?.units.find(u => u.id === unitId);
        
        if (unit) {
            unit.weight = parseFloat(weight) || 0;
            // No renderizar automáticamente
        }
    }

    updateComponentData(courseId, unitId, componentId, field, value) {
        const course = this.courses.find(c => c.id === courseId);
        const unit = course?.units.find(u => u.id === unitId);
        const component = unit?.components.find(c => c.id === componentId);
        
        if (component) {
            if (field === 'weight' || field === 'grade') {
                component[field] = parseFloat(value) || 0;
            } else {
                component[field] = value;
            }
            // No renderizar automáticamente
        }
    }

    calculateUnitGrade(unit) {
        if (!unit.components.length) return 0;
        
        const totalWeight = unit.components.reduce((sum, comp) => sum + comp.weight, 0);
        if (totalWeight === 0) return 0;
        
        const weightedSum = unit.components.reduce((sum, comp) => {
            return sum + (comp.grade * comp.weight);
        }, 0);
        
        return weightedSum / totalWeight;
    }

    calculateCourseGrade(course) {
        if (!course.units.length) return 0;
        
        const totalWeight = course.units.reduce((sum, unit) => sum + unit.weight, 0);
        if (totalWeight === 0) return 0;
        
        const weightedSum = course.units.reduce((sum, unit) => {
            const unitGrade = this.calculateUnitGrade(unit);
            return sum + (unitGrade * unit.weight);
        }, 0);
        
        return weightedSum / totalWeight;
    }

    renderCourse(course) {
        const existingCard = document.getElementById(`course-${course.id}`);
        const courseCard = this.createCourseCard(course);
        
        if (existingCard) {
            existingCard.replaceWith(courseCard);
        } else {
            document.getElementById('coursesContainer').appendChild(courseCard);
        }
        
        this.updateSummary();
    }

    toggleCourse(courseId) {
        const courseContent = document.getElementById(`course-content-${courseId}`);
        const toggleIcon = document.getElementById(`toggle-icon-${courseId}`);
        const isExpanded = courseContent.style.display !== 'none';
        
        if (isExpanded) {
            courseContent.style.display = 'none';
            toggleIcon.textContent = '▶';
            toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            courseContent.style.display = 'block';
            toggleIcon.textContent = '▼';
            toggleIcon.style.transform = 'rotate(0deg)';
        }
    }

    createCourseCard(course) {
        const courseGrade = this.calculateCourseGrade(course);
        const isApproved = courseGrade >= 10.5;
        
        const div = document.createElement('div');
        div.className = 'course-card fade-in';
        div.id = `course-${course.id}`;
        
        div.innerHTML = `
            <div class="course-header-collapsible" onclick="calculator.toggleCourse(${course.id})">
                <div class="course-info">
                    <span class="toggle-icon" id="toggle-icon-${course.id}">▶</span>
                    <h2>${course.name}</h2>
                    <div class="course-grade-preview ${isApproved ? 'approved' : 'failed'}">
                        <span class="grade-value">${courseGrade.toFixed(2)}</span>
                        <span class="grade-label">${isApproved ? 'APROBADO' : 'DESAPROBADO'}</span>
                    </div>
                </div>
                <div class="course-actions" onclick="event.stopPropagation()">
                    <button class="btn btn-danger btn-small" onclick="calculator.removeCourse(${course.id})">
                        🗑️ Eliminar
                    </button>
                </div>
            </div>
            <div class="course-content" id="course-content-${course.id}" style="display: none;">
                <div class="units-container">
                    ${course.units.map(unit => this.createUnitHTML(course.id, unit)).join('')}
                </div>
                <div class="course-actions-bottom">
                    <button class="btn btn-secondary" onclick="calculator.addUnit(${course.id})">
                        ➕ Agregar Unidad
                    </button>
                    <button class="btn btn-primary" onclick="calculator.calculateCourse(${course.id})" style="margin-left: 10px;">
                        📊 Calcular Notas
                    </button>
                </div>
                
                <div class="course-final-result ${isApproved ? 'status-approved' : 'status-failed'}">
                    <h3>📊 Nota Final del Curso</h3>
                    <div class="final-grade">${courseGrade.toFixed(2)}</div>
                    <div class="grade-status">${isApproved ? '✅ APROBADO' : '❌ DESAPROBADO'}</div>
                </div>
            </div>
        `;
        
        return div;
    }

    createUnitHTML(courseId, unit) {
        const unitGrade = this.calculateUnitGrade(unit);
        const weightedGrade = unitGrade * (unit.weight / 100);
        
        return `
            <div class="unit-card">
                <div class="unit-header">
                    <h3>${unit.name}</h3>
                    <div class="unit-weight">
                        <label>Peso (%):</label>
                        <input type="number" 
                               value="${unit.weight}" 
                               min="0" 
                               max="100" 
                               step="0.1"
                               onchange="calculator.updateUnitWeight(${courseId}, ${unit.id}, this.value)">
                        <button class="btn btn-danger btn-small" 
                                onclick="calculator.removeUnit(${courseId}, ${unit.id})">
                            Eliminar
                        </button>
                    </div>
                </div>
                <div class="unit-content">
                    <div class="components-grid">
                        ${unit.components.map(comp => this.createComponentHTML(courseId, unit.id, comp)).join('')}
                    </div>
                    <div class="unit-actions">
                        <button class="btn btn-secondary btn-small" 
                                onclick="calculator.addComponent(${courseId}, ${unit.id})">
                            Agregar Componente
                        </button>
                    </div>
                    <div class="unit-results">
                        <h4>Resultados de la Unidad</h4>
                        <div class="results-grid">
                            <div class="result-item">
                                <div class="label">Nota de la Unidad</div>
                                <div class="value">${unitGrade.toFixed(2)}</div>
                            </div>
                            <div class="result-item">
                                <div class="label">Nota Ponderada</div>
                                <div class="value">${weightedGrade.toFixed(2)}</div>
                            </div>
                            <div class="result-item">
                                <div class="label">Peso Total Componentes</div>
                                <div class="value">${unit.components.reduce((sum, comp) => sum + comp.weight, 0).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createComponentHTML(courseId, unitId, component) {
        return `
            <div class="component-item">
                <div class="component-header">
                    <h4>${component.name}</h4>
                    <span class="component-weight">Peso: ${(component.weight * 100).toFixed(1)}%</span>
                </div>
                <div class="component-inputs">
                    <div class="grade-input-group">
                        <label>Nota:</label>
                        <input type="number" 
                               value="${component.grade}" 
                               min="0" 
                               max="20" 
                               step="0.01"
                               placeholder="0.00"
                               onchange="calculator.updateComponentData(${courseId}, ${unitId}, ${component.id}, 'grade', this.value)">
                    </div>
                    <button class="btn btn-danger btn-small" 
                            onclick="calculator.removeComponent(${courseId}, ${unitId}, ${component.id})">
                        ×
                    </button>
                </div>
            </div>
        `;
    }

    calculateCourse(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (course) {
            this.renderCourse(course);
            this.updateSummary();
        }
    }

    updateSummary() {
        const totalCourses = this.courses.length;
        const approvedCourses = this.courses.filter(course => 
            this.calculateCourseGrade(course) >= 10.5
        ).length;
        const failedCourses = totalCourses - approvedCourses;
        
        const averageGrade = totalCourses > 0 
            ? this.courses.reduce((sum, course) => sum + this.calculateCourseGrade(course), 0) / totalCourses
            : 0;

        const summaryHTML = `
            <div class="summary-grid">
                <div class="summary-item">
                    <h3>Total de Cursos</h3>
                    <div class="summary-value">${totalCourses}</div>
                </div>
                <div class="summary-item">
                    <h3>Cursos Aprobados</h3>
                    <div class="summary-value" style="color: #28a745;">${approvedCourses}</div>
                </div>
                <div class="summary-item">
                    <h3>Cursos Desaprobados</h3>
                    <div class="summary-value" style="color: #dc3545;">${failedCourses}</div>
                </div>
                <div class="summary-item">
                    <h3>Promedio General</h3>
                    <div class="summary-value">${averageGrade.toFixed(2)}</div>
                </div>
            </div>
        `;
        
        document.getElementById('overallSummary').innerHTML = summaryHTML;
    }

    // Función para exportar/importar datos
    exportData() {
        const data = JSON.stringify(this.courses, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notas_academicas.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    importData(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    this.courses = data;
                    this.renderAllCourses();
                    this.updateSummary();
                    alert('Datos importados correctamente');
                } catch (error) {
                    alert('Error al importar los datos');
                }
            };
            reader.readAsText(file);
        }
    }

    renderAllCourses() {
        const container = document.getElementById('coursesContainer');
        container.innerHTML = '';
        this.courses.forEach(course => this.renderCourse(course));
    }
}

// Inicializar la aplicación
const calculator = new GradeCalculator();

// Hacer disponible globalmente para los event handlers inline
window.calculator = calculator;

