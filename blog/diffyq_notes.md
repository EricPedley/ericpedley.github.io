Textbook: https://www.jirka.org/diffyqs/diffyqs.pdf

## Chapter 1
- (1.1) Integrating both sides
- (TODO) (1.2) Slope fields and Picard's theorem for existence and uniqueness
- (1.3) Separable equations = divide out y terms and integrate
    - if you can separate and integratebut not solve for y, you're left with an implicit solution.
    - ex: 
        > $x^2y' = 1-x^2+y^2-x^2y^2, y(1)=0$   
        > is solvable by factoring then dividing.
- (1.4) Linear equations and integrating factor
    - linear equation is in form $$y'+p(x)y=f(x)$$
    - solvable with integrating factor
        - take integral of p, then multiply both sides by e to that function, factor LHS using product rule, then integrate both sides and solve.
    $$y=e^{-\int p(x)dx}(\int e^{\int p(x)dx}f(x)dx+C)$$
    - ex: 
- (1.5) Substitution
    - (1.5.1) changing variables
        - example:
            > $y'=(x-y+1)^2$  
            $v = x-y+1$  
            $v'=1-v^2$   
            solve in v, then substitute back
    - (1.5.2) Bernoulli equations
        - $y'+p(x)y=q(x)y^n$
        - Substitute $v=y^{1-n}$ and it becomes linear
    - (1.5.3) Homogenous Equations
        $$y'=F(y/x)$$
        - Substitute $v=\frac{y}{x}$
- (1.6) Autonomous equations
    - Autonomous means the derivative only depends on the dependent variable, like in $y'=f(y)$
    - Points on y axis where y'=0 are *critical points*
        - Stable -> close values converge, unstable -> close values diverge
    - Phase diagrams are 1-d line with critical points labeled and arrows in direction of the derivative. Both arrows towarwd a critical point are stable, both away is unstable, arrows in same direction through the critical point are semistable (generally can also be called unstable)
- Our class skips 1.7 (Numerical methods: Euler's method), 1.8 (Exact equations), and 1.9 (First order partial differential equations)
## Chapter 2
