import streamlit as st
import plotly.graph_objects as go
from utils import (
    calculate_bmi,
    get_bmi_category,
    calculate_calories,
    calculate_macros,
    get_bmi_color
)

# Page configuration
st.set_page_config(
    page_title="BMI & Nutrition Calculator",
    page_icon="🏋️",
    layout="wide"
)

# Title and introduction
st.markdown("<h1 class='main-title'>🏋️ BMI & Nutrition Calculator</h1>", unsafe_allow_html=True)
st.markdown("""
    Calculate your BMI, get personalized calorie recommendations, and learn about 
    optimal macro distributions based on your goals.
""")

# Create two columns for input
col1, col2 = st.columns(2)

with col1:
    st.subheader("Personal Information")
    
    # Height input with unit selection
    height_unit = st.radio("Height Unit", ["cm", "inches"], horizontal=True)
    height = st.number_input(
        "Enter your height",
        min_value=1.0,
        max_value=300.0 if height_unit == "cm" else 118.0,
        value=170.0 if height_unit == "cm" else 67.0
    )
    
    # Weight input with unit selection
    weight_unit = st.radio("Weight Unit", ["kg", "lbs"], horizontal=True)
    weight = st.number_input(
        "Enter your weight",
        min_value=1.0,
        max_value=500.0 if weight_unit == "kg" else 1102.0,
        value=70.0 if weight_unit == "kg" else 154.0
    )

with col2:
    st.subheader("Goals & Activity")
    
    age = st.number_input("Age", min_value=15, max_value=100, value=30)
    gender = st.radio("Gender", ["Male", "Female"], horizontal=True)
    
    activity_levels = {
        "Sedentary": "Little to no exercise",
        "Light": "Light exercise 1-3 times/week",
        "Moderate": "Moderate exercise 3-5 times/week",
        "Active": "Hard exercise 6-7 times/week",
        "Very Active": "Professional athlete level"
    }
    
    activity = st.select_slider(
        "Activity Level",
        options=list(activity_levels.keys()),
        value="Moderate"
    )
    st.caption(activity_levels[activity])
    
    goal = st.selectbox(
        "What is your goal?",
        ["Weight Loss", "Maintenance", "Weight Gain"]
    )

# Convert units if necessary
if height_unit == "inches":
    height = height * 2.54
if weight_unit == "lbs":
    weight = weight * 0.453592

# Calculate BMI
bmi = calculate_bmi(weight, height)
bmi_category = get_bmi_category(bmi)
bmi_color = get_bmi_color(bmi_category)

# Display BMI Results
st.header("Your Results")
col1, col2, col3 = st.columns(3)

with col1:
    st.metric("Your BMI", f"{bmi:.1f}")
    st.markdown(f"<p style='color:{bmi_color}'><strong>Category: {bmi_category}</strong></p>", unsafe_allow_html=True)

# Calculate calories for all goals
maintenance_calories = calculate_calories(weight, height, age, gender, activity, "Maintenance")
weight_loss_calories = calculate_calories(weight, height, age, gender, activity, "Weight Loss")
weight_gain_calories = calculate_calories(weight, height, age, gender, activity, "Weight Gain")

# Calculate expected weight changes
weekly_weight_loss = round((maintenance_calories - weight_loss_calories) * 7 / 7700, 2)  # 7700 calories = 1kg of fat
weekly_weight_gain = round((weight_gain_calories - maintenance_calories) * 7 / 7700, 2)

# Display all calorie recommendations
st.header("Calorie Recommendations")
st.markdown("""
<style>
    .calorie-box {
        padding: 20px;
        border-radius: 5px;
        margin: 10px 0;
    }
    .weight-change {
        color: #666;
        font-style: italic;
        margin-top: 5px;
    }
</style>
""", unsafe_allow_html=True)

col1, col2, col3 = st.columns(3)

with col1:
    st.markdown("""
        <div class="calorie-box" style="background-color: #FFE0E0;">
        <h3>Weight Loss</h3>
        </div>
    """, unsafe_allow_html=True)
    st.metric("Daily Calories", f"{weight_loss_calories:,.0f} kcal")
    st.markdown(f'<p class="weight-change">Expected loss: {weekly_weight_loss} kg/week</p>', unsafe_allow_html=True)
    loss_macros = calculate_macros(weight_loss_calories, "Weight Loss")
    st.markdown(f"""
        - Protein: {loss_macros['protein']}g
        - Carbs: {loss_macros['carbs']}g
        - Fats: {loss_macros['fats']}g
    """)

with col2:
    st.markdown("""
        <div class="calorie-box" style="background-color: #E0FFE0;">
        <h3>Maintenance</h3>
        </div>
    """, unsafe_allow_html=True)
    st.metric("Daily Calories", f"{maintenance_calories:,.0f} kcal")
    maintenance_macros = calculate_macros(maintenance_calories, "Maintenance")
    st.markdown(f"""
        - Protein: {maintenance_macros['protein']}g
        - Carbs: {maintenance_macros['carbs']}g
        - Fats: {maintenance_macros['fats']}g
    """)

with col3:
    st.markdown("""
        <div class="calorie-box" style="background-color: #E0E0FF;">
        <h3>Weight Gain</h3>
        </div>
    """, unsafe_allow_html=True)
    st.metric("Daily Calories", f"{weight_gain_calories:,.0f} kcal")
    st.markdown(f'<p class="weight-change">Expected gain: {weekly_weight_gain} kg/week</p>', unsafe_allow_html=True)
    gain_macros = calculate_macros(weight_gain_calories, "Weight Gain")
    st.markdown(f"""
        - Protein: {gain_macros['protein']}g
        - Carbs: {gain_macros['carbs']}g
        - Fats: {gain_macros['fats']}g
    """)

# Add explanations for each goal
st.markdown("""
### Goal Explanations
- **Weight Loss**: 20% calorie deficit with higher protein to preserve muscle mass
- **Maintenance**: Balanced macronutrient distribution to maintain current weight
- **Weight Gain**: 20% calorie surplus with higher carbs for muscle gain
""")

# Create macro distribution pie chart based on selected goal
if goal == "Weight Loss":
    macros = loss_macros
    daily_calories = weight_loss_calories
elif goal == "Weight Gain":
    macros = gain_macros
    daily_calories = weight_gain_calories
else:
    macros = maintenance_macros
    daily_calories = maintenance_calories

fig = go.Figure(data=[go.Pie(
    labels=['Protein', 'Carbs', 'Fats'],
    values=[macros['protein'] * 4, macros['carbs'] * 4, macros['fats'] * 9],
    hole=.4
)])

fig.update_layout(
    title="Daily Calorie Distribution",
    annotations=[dict(text=f'{daily_calories:,.0f} kcal', x=0.5, y=0.5, font_size=20, showarrow=False)]
)

st.plotly_chart(fig, use_container_width=True)

# Additional Information
st.header("💡 Health Tips")
st.markdown("""
- **Stay Hydrated**: Drink at least 8 glasses of water daily
- **Regular Exercise**: Aim for 150 minutes of moderate activity per week
- **Sleep Well**: Get 7-9 hours of quality sleep each night
- **Balanced Diet**: Include a variety of fruits, vegetables, and whole grains
""")

# Disclaimer
st.caption("""
This calculator provides estimates based on general formulas. Consult with healthcare 
professionals for personalized advice. Results may vary based on individual factors.
""")