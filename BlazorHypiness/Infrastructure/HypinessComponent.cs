using BlazorHypiness.Constants;
using BlazorHypiness.Utilities;
using Microsoft.AspNetCore.Components;

namespace BlazorHypiness.Infrastructure;
public abstract class HypinessComponent : ComponentBase
{
	private string? compiledCss;
	private readonly Dictionary<string, object> _inputAttributes = new( );

	protected IReadOnlyDictionary<string, object> InputAttributes => _inputAttributes;
	protected string CompiledCss { get => compiledCss ??= BuildCss(new CssBuilder( )).Build( ); }

	[Parameter]
	public string? CssClass { get; set; }

	[Parameter]
	public string? Style { get; set; }

	protected override void OnParametersSet( )
	{
		compiledCss = null;
		_inputAttributes.Clear( );
		base.OnParametersSet( );
		if (Style is not null && !_inputAttributes.ContainsKey(Strings.STYLE))
			_inputAttributes.Add(Strings.STYLE, Style);
	}

	protected virtual CssBuilder BuildCss(CssBuilder builder)
	{
		if (CssClass is not null)
			builder.Add(CssClass);
		return builder;
	}
}
